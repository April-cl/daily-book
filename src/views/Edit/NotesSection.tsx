import styled from 'styled-components';
import Icon from '../../components/Icon';
import React from 'react';

const Wrapper = styled.section`
  border-bottom: 1px solid #7a7a7a;
  margin: 0 20px 20px;
  height: 40px;
  line-height: 40px;
  position: relative;
  font-size: 16px;

  > .icon {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  > input {
    font-size: 16px;
    width: 100%;
    padding-right: 3em;
    margin-left: 3em;
  }
`;

type Props = {
  value: string,
  onChange: (value: string) => void
}

const NotesSection: React.FC<Props> = (props) => {
  const note = props.value
  return (
    <Wrapper>
      <Icon name="note"/>
      <input type="text" placeholder="添加备注" value={note} onChange={(e) => {props.onChange(e.target.value)}}></input>
    </Wrapper>
  )
}

export {NotesSection}