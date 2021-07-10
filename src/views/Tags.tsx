import Layout from '../components/Layout';
import React from 'react';
import { useTags } from '../useTags';
import Icon from '../components/Icon';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { createId } from '../lib/createId';

const TagList = styled.ul`
  background-color: #fff;
  font-size: 16px;
  li {
    display:flex;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid #ccc;
    margin: 0 20px;
    .delete {
      fill: #fc2b29;
      margin-right: 20px;
      font-size: 18px;
    }
    .tag {
      flex-grow: 1;
      .chinese {
        margin-left: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .menu {
      font-size: 18px;
    }
  }
`
const AddTag = styled.button`
  position: fixed;
  bottom: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 20px;
  padding: 18px 0;
  background-color: #fff;
  border-top: 1px solid #ccc;
  .icon {
    margin-right: 5px;
  }
  span {
    margin-left: 5px;
  }
`

function Tags() {
  const {tags, setTags} = useTags()
  const addNewTag = () => {
    const tagName = window.prompt('请输入新标签名字：')
    if (tagName !== null) {
      setTags([...tags, {id: createId(), iconName: 'custom', chinese: tagName}])
    }
  }
  return (
    <TagList>
      {tags.map(tag =>
        <li key={tag.id}>
          {tag.id}
          <button className='delete' >
              <Icon name='delete' />
          </button>
          <Link className='tag' to={'/tags/' + tag.chinese}>
            <span className='iconName' >
                <Icon name={tag.iconName}/>
            </span>
            <span className='chinese' >{tag.chinese}</span>
          </Link>
          <button className='menu' >
              <Icon name='menu' />
          </button>
        </li>
      )}
      <AddTag onClick={addNewTag}>
        <Icon name='add' />
        <span>新建标签</span>
      </AddTag>
    </TagList>
  );
}

export { Tags }