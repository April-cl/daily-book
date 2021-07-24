import React from 'react';
import { useTags } from '../../useTags';
import Icon from '../../components/Icon';
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
  value: Tag,
  closeModal: () => void
}

const TagEdit: React.FC<Props> = (props) => {
  const {addTag, updateTag, findTag} = useTags()
  let {id} = props.value
  let tag: Tag
  let option: string
  if (findTag(id)) {
    tag = findTag(id)
    option = 'edit'
  } else {
    tag = props.value
    option = 'add'
  }
  return (
    <TagEditWrapper>
        <div className="editIcon">
          <label className='legend'>图标</label>
          <Icon name={tag?.iconName} />
        </div>
        <div className="editName">
          <label>标签名</label>
          <input value={tag?.chinese} onChange={(e) => {
            if (option === 'edit') {
              updateTag(tag.id, {chinese: e.target.value})
            } else if (option === 'add') {
              addTag(e.target.value)
            }
          }} />
        </div>
        <div className="buttonGroup">
          <button className='close' onClick={() => {props.closeModal();}}>取消</button>
          <button className='submit'>确定修改</button>
        </div>
    </TagEditWrapper>
  )
}

export {TagEdit}