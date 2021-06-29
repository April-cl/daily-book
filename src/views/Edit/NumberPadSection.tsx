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
const NumberPadSection: React.FC = () => {
  return (
    <Wrapper>
      <div className="pad">
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