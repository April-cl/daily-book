import styled from 'styled-components';
import React from 'react';
import Icon from './Icon';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.section`
  color: #fff;
  padding: 16px 0;
  background-color: #26b59a;
  position: relative;
  .return {
    font-size: 16px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    .icon {
      fill: #fff;
      margin-left: 20px;
    }
    .icon, span {
      display: inline-block;
      vertical-align: middle;
    }
  }
  .pageTitle {
    font-size: 20px;
    text-align: center;
  }
`;

type Props = {
  pageTitle: string
}

const TopBar:React.FC<Props> = (props) => {
  const history = useHistory()
  console.log(history);
  const onClickBack = ()=>{
    history.goBack()
  }
  return (
    <Wrapper>
      <button className="return" onClick={onClickBack}>
        <Icon name='return' />
        <span>返回</span>
      </button>
      <div className="pageTitle">
        {props.pageTitle}
      </div>
    </Wrapper>
  )
}

export {TopBar}