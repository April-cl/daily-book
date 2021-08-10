import styled from 'styled-components';
import React from 'react';
import Icon from '../../components/Icon';

const Wrapper = styled.section`
  display: flex;
  >.monthSelector {
    position: relative;
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
      background-color: #fff;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      pointer-events: none;
      position: relative;
      &.disabled {
        cursor: none;
        color: #ccc;
        > .icon {
          fill: #ccc;
        }
      }
      > .icon {
        position: absolute;
        left: 20px;
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
  }
  > .all {
    margin-left: 16px;
    > label {
      position: relative;
      input {
        appearance: none;
        -webkit-appearance: none;
        outline: none;
        &:after {
          position: absolute;
          top: 0;
          left: -75%;
          display: block;
          content: "";
          width: 18px;
          height: 18px;
          background: #fff;
          border-radius: 50%;
          border: 2px solid #bfbfbf;
        }
        &:checked:after {
          background-color: #26b59a;
          border: 2px solid #fff;
        }
        &:checked + span {
          color: #26b59a;
        }
        @media (max-width: 500px) {
          &:after {
            width: 14px;
            height: 14px;
          }
        }
      }
    }
  }
`;

type Props = {
  value: string,
  onChange: (date: string) => void,
  disabled: boolean,
  toggle: () => void
}

const DateSelectSection:React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <div className="all">
        <label><input type="checkbox" checked={props.disabled} onChange={() => props.toggle()}/><span>全部</span></label>
      </div>
      <div className="monthSelector">
        <input disabled={props.disabled} value={props.value} type="month" onChange={(e) => {
          props.onChange(e.target.value)
        }} />
        <div className={props.disabled ? 'disabled date' : 'date'}>
          <Icon name="calendar"/>
          <span>{props.value}</span>
        </div>
      </div>
    </Wrapper>
  )
}

export {DateSelectSection}