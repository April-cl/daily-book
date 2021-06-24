import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const CategorySection = styled.section`
  border: 1px solid yellow;
`
const DateSection = styled.section`
  border: 1px solid darkblue;
`
const TagsSection = styled.section`
  background-color: #FFF;
  border: 1px solid black;
`
const NotesSection = styled.section`
  border: 1px solid red;
`
const NumberPadSection = styled.section`
  border: 1px solid purple;
`

function Edit() {
  return (
    <Layout>
      <CategorySection>
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <DateSection>
        <input type="date"/>
      </DateSection>
      <TagsSection>
        <ul>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text"/>
        </label>
      </NotesSection>
      <NumberPadSection>
        <div>0</div>
        <div>
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
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </Layout>
  );
}

export default Edit