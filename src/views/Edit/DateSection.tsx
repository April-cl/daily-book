import styled from 'styled-components';

const DateSection = styled.section`
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

export {DateSection}