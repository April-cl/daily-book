import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';
import { CategorySection } from './Edit/CategorySection';
import { OutputSection } from './Edit/OutputSection';
import { DateSection } from './Edit/DateSection';
import { NotesSection } from './Edit/NotesSection';
import { NumberPadSection } from './Edit/NumberPadSection';
import { TagsSection } from './Edit/TagsSection';

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