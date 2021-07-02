import styled from 'styled-components';
import React, { useState } from 'react';

const Wrapper = styled.section`
  color: #fff;
  padding: 20px 0;
  background-color: #26b59a;
  position: relative;
  > ul {
    font-size: 18px;
    display: flex;
    justify-content: center;
    li {
      padding: 4px 20px;
      border: 1px solid #fff;
      cursor: pointer;
      &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        border-right: none;
      }
      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      &.selected {
        background-color: #fff;
        color: #26b59a;
      }
    }
  }
`;

type Props = {
  value: '-' | '+',
  onChange: (value: '-' | '+') => void
}

const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {'-': '支出', '+': '收入'}
  type Keys = keyof typeof categoryMap
  const [categoryList] = useState<Keys[]>(['-', '+'])
  const category = props.value
  const getClass = (c: string) => {return category === c ? 'selected' : ''}
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c => {
          return (
            <li key={c} onClick={() => {props.onChange(c)}} className={getClass(c)}>{categoryMap[c]}</li>
          )
        })}
      </ul>
    </Wrapper>
  )
}

export {CategorySection}