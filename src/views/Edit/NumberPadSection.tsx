import styled from 'styled-components';

const NumberPadSection = styled.section`
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

export {NumberPadSection}