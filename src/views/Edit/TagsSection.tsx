import styled from 'styled-components';
import React from 'react';
import Icon from 'components/Icon';
import { useTags } from 'hooks/useTags';
import { TagEdit } from '../Tags/TagEdit';
import { useModal } from '../../hooks/useModal';

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

type Props = {
  value: Tag,
  onChange: (value: Tag) => void
}

const TagsSection: React.FC<Props> = (props) => {
  const { show, hide, RenderModal } = useModal()
  const {tags} = useTags()
  const selectedTagId = props.value.id
  const onToggleTag = (tag: any) => {
    props.onChange(selectedTagId === tag.id ? {} : tag)
  }
  const getClass = (tagId: number) => {return selectedTagId === tagId? 'selected' : ''}
  return (
    <>
      <Wrapper>
        <ul>
          {
            tags.map((tag) => {
              return (
                <li key={tag.chinese} onClick={() => onToggleTag(tag)} className={getClass(tag.id)}>
                <span className="iconWrapper">
                <Icon name={tag.iconName}/>
                </span>
                  <span>{tag.chinese}</span>
                </li>
              )
            })
          }
          <li onClick={() => {show()}}>
          <span className="iconWrapper">
          <Icon name="add"/>
          </span>
            <span>新增标签</span>
          </li>
        </ul>
      </Wrapper>
      <RenderModal>
        <TagEdit value={null} closeModal={hide}/>
      </RenderModal>
    </>
  )
}

export {TagsSection}