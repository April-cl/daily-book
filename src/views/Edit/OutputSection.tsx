import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  color: #26b59a;
  background-color: #fff;
  > .outputWrapper {
    display: flex;
    height: 60px;
    line-height: 60px;
    margin: 0 20px;
    border-bottom: 1px solid #eee;
    > .tagSelected {
    }
    > .count {
      flex-grow: 1;
      font-size: 30px;
      text-align: right;
    }
  }
`
type Props = {
  value: number
}
const OutputSection: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <div className="outputWrapper">
        <div className="tagSelected">餐饮</div>
        <div className="count">{parseFloat(props.value.toString())}</div>
      </div>
    </Wrapper>
  )
}

export {OutputSection}