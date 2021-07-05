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
  output: string,
  tag: string
}
const OutputSection: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <div className="outputWrapper">
        <div className="tagSelected">{props.tag}</div>
        <div className="count">{props.output}</div>
      </div>
    </Wrapper>
  )
}

export {OutputSection}