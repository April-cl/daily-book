import styled from 'styled-components';
import React, { useState } from 'react';
import Icon from '../../components/Icon';

const Wrapper = styled.section`
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
const TagsSection: React.FC = () => {
  const [tags, setTags] = useState<{iconName: string, chinese: string}[]>([{iconName: 'diet',chinese: '餐饮'}])
  const [selectedTag, setSelectedTag] = useState<boolean>(false)
  const addNewTag = () => {
    const tagName = window.prompt('请输入新标签名字：')
    if (tagName !== null) {
      setTags([...tags, {iconName: 'custom', chinese: tagName}])
    }
  }
  const onToggleTag = (tag: any) => {
    if (selectedTag) {
      setSelectedTag(false)
    } else {
      setSelectedTag(true)
    }
  }
  const getClass = (selectedTag: boolean) => {return selectedTag? 'selected' : ''}
  return (
    <Wrapper>
      <ul>
        {
          tags.map((tag) => {
            return (
              <li key={tag.chinese} onClick={() => onToggleTag(tag)} className={getClass(selectedTag)}>
                <span className="iconWrapper">
                <Icon name={tag.iconName}/>
                </span>
                <span>{tag.chinese}</span>
              </li>
            )
          })
        }
        <li onClick={addNewTag}>
          <span className="iconWrapper">
          <Icon name="add"/>
          </span>
          <span>新增标签</span>
        </li>
      </ul>
    </Wrapper>
  )
}

export {TagsSection}