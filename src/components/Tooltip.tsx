import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  .content {
    width: 100%;
    margin: 10px 0;
  }
  .closeButton {
    font-size: 18px;
    border-radius: 10px;
    background-color: #26b59a;
    color: #fff;
    padding: 10px 30px;
  }
`

type Props = {
  content: string,
  closeModal: () => void
}

const Tooltip:React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <div className="content">
        {props.content}
      </div>
      <button className="closeButton" onClick={() => {props.closeModal()}}>知道了</button>
    </Wrapper>
  )
}

export {Tooltip}