import React, { Ref, useImperativeHandle, useState } from 'react';
import { Wrapper } from './NumberPadSection/Wrapper';
import { generateOutput } from './NumberPadSection/generateOutput';

type Props = {
  value: number,
  onChange: (value: number, output: string) => void,
  onOk: () => void,
  onRef: Ref<any>
}

const NumberPadSection: React.FC<Props> = (props) => {
  const [output, _setOutput] = useState(props.value.toString())
  const setOutput = (output: string) => {
    let newOutput: string;
    if (output.length > 16) {
      newOutput = output.slice(0, 16);
    } else if (output.length === 0) {
      newOutput = '0';
    } else {
      newOutput = output;
    }
    _setOutput(newOutput)
    props.onChange(parseFloat(newOutput), newOutput);
  }
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent
    if (text === null) {return}
    if (text === 'OK') {
      if (props.onOk) {
        props.onOk()
      }
      return
    }
    if ('0123456789.'.split('').concat(['删除', '清空']).indexOf(text) >= 0) {
      setOutput(generateOutput(text, output))
    }
  }
  const func = () => {
    setOutput('')
  }
  useImperativeHandle(props.onRef, () => {
    return {
      func: func,
    };
  })
  return (
    <Wrapper>
      <div className="pad" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="dot">.</button>
        <button className="zero">0</button>
      </div>

    </Wrapper>
  )
}

export {NumberPadSection}