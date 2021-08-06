import React, { useEffect, useState } from 'react';
import { useTags } from 'hooks/useTags';
import Icon from 'components/Icon';
import styled from 'styled-components';

const TagEditWrapper = styled.div`
  .editIcon, .editName {
    margin: 10px 0;
    padding: 20px;
    background-color:  #fff;
    label {
      display: inline-block;
      width: 60px;
      text-align: right;
      margin: 0 10px;
      color: #999;
    }
    input {
      font-size: 18px;
    }
  }
  .buttonGroup {
    display: flex;
    justify-content: space-between;
    padding: 0 10%;
    .submit, .close {
      font-size: 18px;
      border-radius: 10px;
      background-color: #26b59a;
      color: #fff;
      padding: 10px 30px;
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
          if (testTag(inputValue) === 0) {
            if (option === 'edit') {
              updateTag(tag.id, inputValue)
            } else if (option === 'add') {
              addTag(inputValue)
            }
            setTimeout(() => {
              props.closeModal()
              window.location.reload()
            }, 0)
          } else if (testTag(inputValue) === 1) {
            alert('标签名不能为空')
          } else if (testTag(inputValue) === 2) {
            alert('标签名已存在')
          }
        }}>确定修改</button>
      </div>
    </TagEditWrapper>
  )
}

export {TagEdit}