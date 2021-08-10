import React, { useEffect, useState } from 'react';
import { useTags } from 'hooks/useTags';
import Icon from 'components/Icon';
import styled from 'styled-components';
import { Tooltip } from '../../components/Tooltip';
import { useModal } from '../../hooks/useModal';

const TagEditWrapper = styled.div`
  .editIcon, .editName {
    margin: 10px 0;
    padding: 8px;
    background-color:  #fff;
    font-size: 16px;
    label {
      display: inline-block;
      width: 48px;
      text-align: right;
      margin-right: 10px;
      color: #999;
    }
    input {
      font-size: 16px;
    }
  }
  .buttonGroup {
    display: flex;
    justify-content: space-between;
    padding: 0 10%;
    .submit, .close {
      font-size: 16px;
      border-radius: 10px;
      background-color: #26b59a;
      color: #fff;
      padding: 10px 16px;
    }
    .close {
      background-color: #ababab;
    }
  }
`

type Props = {
  value: Tag | null,
  closeModal: () => void
}

const TagEdit: React.FC<Props> = (props) => {
  const newTag = {
    id: parseInt(window.localStorage.getItem('tagIdMax') || '0') + 1,
    iconName: 'custom',
    chinese: ''
  }
  const { show, hide, RenderModal } = useModal()
  const [content, setContent] = useState('')
  const {addTag, updateTag, findTag, testTag} = useTags()
  let tag: Tag
  let option: string
  if (props.value && findTag(props.value.id)) {
    tag = findTag(props.value.id)
    option = 'edit'
  } else {
    tag = newTag
    option = 'add'
  }
  const [inputValue, setInputValue] = useState(tag.chinese)
  const close = () => {
    hide()
    props.closeModal()
  }
  useEffect(() => {
    setInputValue(tag.chinese)
  }, [tag.chinese])
  return (
    <TagEditWrapper>
      <div className="editIcon">
        <label className='legend'>图标</label>
        <Icon name={tag?.iconName} />
      </div>
      <div className="editName">
        <label>标签名</label>
        <input value={inputValue} onChange={(e) => {
          setInputValue(e.target.value)
        }}/>
      </div>
      <div className="buttonGroup">
        <button className='close' onClick={() => {props.closeModal();}}>取消</button>
        <button className='submit' onClick={() => {
          show()
          if (testTag(inputValue) === 0) {
            if (option === 'edit') {
              updateTag(tag.id, inputValue)
            } else if (option === 'add') {
              addTag(inputValue)
            }
            setContent('记下啦~~~')
          } else if (testTag(inputValue) === 1) {
            setContent('标签名不能为空')
          } else if (testTag(inputValue) === 2) {
            setContent('标签名已存在')
          }
        }}>确定</button>
      </div>

      <RenderModal modalTitle='提交结果'>
        <Tooltip closeModal={close} content={content}/>
      </RenderModal>
    </TagEditWrapper>
  )
}

export {TagEdit}