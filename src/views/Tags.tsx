import React, { useState } from 'react';
import { useTags } from '../useTags';
import Icon from '../components/Icon';
import styled from 'styled-components';
import { createId } from '../lib/createId';
import { TopBar } from '../components/TopBar';
import { TagEdit } from './TagEdit';

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
  let [showEdit, setShowEdit] = useState(false)
  let [selectedTag, setSelectedTag] = useState<Tag>({
    id: 0,
    iconName: '',
    chinese: ''
  })
  const {tags, setTags, deleteTag} = useTags()
  const addNewTag = () => {
    const tagName = window.prompt('请输入新标签名字：')
    if (tagName !== null) {
      setTags([...tags, {id: createId(), iconName: 'custom', chinese: tagName}])
    }
  }
  const toggleEdit = (tag: Tag) => {
    if (showEdit) {
      setShowEdit(false)
    } else {
      setShowEdit(true)
      setSelectedTag(tag)
    }
  }
  return (
    <>
      <TopBar pageTitle={'标签设置'}></TopBar>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            {tag.id}
            <button className='delete' onClick={(e) => {
              deleteTag(tag.id)
            }}>
              <Icon name='delete' />
            </button>
            <div className='tag'>
              <span className='iconName' >
                  <Icon name={tag.iconName}/>
              </span>
              <span className='chinese' >{tag.chinese}</span>
            </div>
            <button className='menu' onClick={(e) => toggleEdit(tag)} >
              <Icon name='menu' />
            </button>
          </li>
        )}
        <AddTag onClick={addNewTag}>
          <Icon name='add' />
          <span>新建标签</span>
        </AddTag>
      </TagList>
      <TagEdit value={selectedTag} showEdit={showEdit} onClose={(showEdit) => {
        setShowEdit(showEdit)
      }} />
    </>
  );
}

export { Tags }