import styled from 'styled-components';
import React from 'react';
import Icon from './Icon';

const Wrapper = styled.section`
  color: #fff;
  padding: 16px 0;
  background-color: #26b59a;
  position: relative;
  .return {
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
  .tagTitle {
    font-size: 20px;
    text-align: center;
  }
`;

const TopBar:React.FC<any> = (props) => {
  return (
    <Wrapper>
      <div className="return">
        <Icon name='return' />
        <span>返回</span>
      </div>
      <div className="tagTitle">
        页面标题
      </div>
    </Wrapper>
  )
}

export {TopBar}