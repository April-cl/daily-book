import styled from 'styled-components';
import React from 'react';
import Icon from '../../components/Icon';
import day from 'dayjs'

const Wrapper = styled.section`
  position: relative;
  cursor: pointer;
  border-bottom: 1px solid #7a7a7a;
  margin: 10px 20px;
  min-height: 40px;
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
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    pointer-events: none;
    position: absolute;

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

type Props = {
  value: string,
  onChange: (value: string) => void
}

const DateSection:React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <input type="date" onChange={(e) => {
        props.onChange(e.target.value)
      }}/>
      <div className="date">
        <Icon name="calendar"/>
        <span>{day(props.value).format('YYYY年M月D日')}</span>
      </div>
    </Wrapper>
  )
}

export {DateSection}