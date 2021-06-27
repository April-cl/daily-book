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
const TagsSection = styled.section`
  background-color: #fff;
  flex-grow: 1;
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      padding: 12px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 20%;
      font-size: 14px;
      .iconWrapper {
        width: 40px;
        height: 40px;
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
const NotesSection = styled.section`
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
const EditLayout = styled(Layout)`
    display:flex;
    flex-direction: column;
`

function Edit() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (
    <EditLayout>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <OutputSection>
        <div className="outputWrapper">
          <div className="tagSelected">餐饮</div>
          <div className="count">0.00</div>
        </div>
      </OutputSection>
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
    </EditLayout>
  );
}

export default Edit;