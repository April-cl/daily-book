import React, { useState } from 'react';
import { useTags } from 'hooks/useTags';
import Icon from 'components/Icon';
import styled from 'styled-components';
import { TopBar } from 'components/TopBar';
import { TagEdit } from './Tags/TagEdit';
import { useModal } from 'hooks/useModal';

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
  const { show, hide, RenderModal } = useModal()
  let [selectedTag, setSelectedTag] = useState<Tag | null>(null)
  const [modalTitle, setModalTitle] = useState('编辑标签')
  const {tags, deleteTag} = useTags()
  return (
    <>
      <TopBar pageTitle={'标签设置'} returnIcon={true}></TopBar>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <button className='delete' onClick={() => {
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
            <button className='menu'  onClick={() => {
              setSelectedTag(tag)
              setModalTitle('编辑标签')
              show();
            }} >
              <Icon name='menu' />
            </button>
          </li>
        )}
        <AddTag onClick={() => {
          setSelectedTag(null)
          setModalTitle('新建标签')
          show();
        }}>
          <Icon name='add' />
          <span>新建标签</span>
        </AddTag>
        <RenderModal modalTitle={modalTitle}>
          <TagEdit value={selectedTag} closeModal={hide}/>
        </RenderModal>
      </TagList>
    </>
  );
}

export { Tags }