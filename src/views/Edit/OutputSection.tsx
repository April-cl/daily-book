import styled from 'styled-components';

const OutputSection = styled.section`
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

export {OutputSection}