import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  > .pad {
    padding: 10px;
    height: 240px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 10px;
    > button {
      font-size: 20px;
      border-radius: 10px;
      background-color: #fff;
      &.zero {
        grid-column-start: 2;
        grid-column-end: 4;
        grid-row-start: 4;
        grid-row-end: 5;
      }
      &.ok {
        grid-column-start: 4;
        grid-column-end: 5;
        grid-row-start: 3;
        grid-row-end: 5;
        background-color: rgba(38, 181, 154, 0.8);
        color: #fff;
      }
    }
  }
`;

type Props = {
  value: number,
  onChange: (value: number) => void
}

const NumberPadSection: React.FC<Props> = (props) => {
  const output = props.value.toString()
  let value
  const setOutput = (output:string) => {
    if (output.length > 16) {
      value = parseFloat(output.slice(0, 16))
    } else if (output.length === 0) {
      value = 0
    }else {
      value = parseFloat(output);
    }
    props.onChange(value)
  }
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).innerText
    if (text === null) {return}
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (output === '0') {
          setOutput(text)
        } else {
          setOutput(output + text)
        }
        break
      case '.':
        if (output.indexOf('.') >= 0) {return}
        setOutput(output + '.')
        break
      case '删除':
        if (output.length === 1) {
          setOutput('0')
        } else {
          setOutput(output.slice(0, -1))
        }
        break
      case '清除':
        setOutput('0')
        break
      case 'OK':
        console.log('用户点击了OK');
        break
    }
  }
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