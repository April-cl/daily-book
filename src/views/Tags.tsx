import React, { useState } from 'react';
import { useTags } from 'hooks/useTags';
import Icon from 'components/Icon';
import styled from 'styled-components';
import { TopBar } from 'components/TopBar';
import { TagEdit } from './Tags/TagEdit';
import { useModal } from 'hooks/useModal';

const TagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media (min-width: 500px) {
    margin: 0 auto;
    max-width: 500px;
    border: 1px solid #ccc;
    overflow-x: hidden;
  }
`

const TagList = styled.ul`
  flex: 1;
  overflow: auto;
  width: 100%;
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
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
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
    <TagWrapper>
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
      </TagList>
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
    </TagWrapper>
  );
}

export { Tags }