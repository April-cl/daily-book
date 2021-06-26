import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';

const CategorySection = styled.section`
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
const TagsSection = styled.section`
  background-color: #fff;

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      padding: 12px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 25%;

      .iconWrapper {
        width: 60px;
        height: 60px;
        font-size: 30px;
        border: 1px solid #f0eff4;
        border-radius: 50%;
        background-color: #f0eff4;
        margin-bottom: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &.selected {
        color: #26b59a;

        .iconWrapper {
          background-color: #26b59a;
          fill: #fff;
        }
      }
    }
  }
`;
const DateSection = styled.section`
  position: relative;
  cursor: pointer;
  border-bottom: 1px solid #7a7a7a;
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

    > .icon {
      margin: 0 2em;
    }

    > span, > svg {
      vertical-align: middle;
    }
  }
`;
const NotesSection = styled.section`
  border-bottom: 1px solid #7a7a7a;
  margin-bottom: 10px;
  height: 40px;
  line-height: 40px;

  > .icon {
    margin: 0 2em;
  }

  > input, > svg {
    vertical-align: middle;
  }
`;
const NumberPadSection = styled.section`
  display: flex;
  flex-direction: column;

  > .output {
    color: #26b59a;
    background-color: #fff;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 12px;
    box-shadow: inset 0 -5px 3px -5px rgba(0, 0, 0, 0.35),
    inset 0 5px 3px -5px rgba(0, 0, 0, 0.35);
  }

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

function Edit() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (
    <Layout>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <TagsSection>
        <ul>
          <li className="selected">
            <span className="iconWrapper">
              <Icon name="diet"/>
            </span>
            <span>餐饮</span>
          </li>
          <li className="selected">
            <span className="iconWrapper">
            <Icon name="clothes"/>
            </span>
            <span>服饰</span>
          </li>
          <li>
            <span className="iconWrapper">
            <Icon name="family"/>
            </span>
            <span>居家</span>
          </li>
          <li>
            <span className="iconWrapper">
            <Icon name="transportation"/>
            </span>
            <span>交通</span>
          </li>
          <li>
            <span className="iconWrapper">
            <Icon name="add"/>
            </span>
            <span>新增标签</span>
          </li>
        </ul>
      </TagsSection>
      <DateSection>
        <input type="date"/>
        <div className="date">
          <Icon name="calendar"/>
          <span>{year}年{month}月{day}日</span>
        </div>
      </DateSection>
      <NotesSection>
        <Icon name="note"/>
        <input type="text" placeholder="添加备注"></input>
      </NotesSection>
      <NumberPadSection>
        <div className="output">0</div>
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
      </NumberPadSection>
    </Layout>
  );
}

export default Edit;