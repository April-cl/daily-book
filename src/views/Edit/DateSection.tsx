import styled from 'styled-components';
import React from 'react';
import Icon from '../../components/Icon';

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

const Wrapper = styled.section`
  position: relative;
  cursor: pointer;
  border-bottom: 1px solid #7a7a7a;
  margin: 10px 20px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;

  > input {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;

    ::-webkit-calendar-picker-indicator {
      height: 100%;
      width: 100%;
    }
  }

  > .date {
    background-color: #f0eff4;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    pointer-events: none;
    position: relative;

    > .icon {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    > span {
      display: inline-block;
      width: 100%;
      padding-right: 3em;
      margin-left: 3em;
    }
  }
`;
const DateSection:React.FC = () => {
  return (
    <Wrapper>
      <input type="date"/>
      <div className="date">
        <Icon name="calendar"/>
        <span>{year}年{month}月{day}日</span>
      </div>
    </Wrapper>
  )
}

export {DateSection}