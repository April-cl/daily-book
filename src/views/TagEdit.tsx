import React, { useEffect, useState } from 'react';
import { useTags } from '../useTags';
import { TopBar } from '../components/TopBar';
import Icon from '../components/Icon';
import styled from 'styled-components';

const TagEditWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  &.show {
    display: block;
  }
  &.hide {
    display: none;
  }
  .tagEdit {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 60%;
    transform: translate(-50%, -50%);
    background-color:  #f0eff4;
    font-size: 18px;
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
    .submit {
      font-size: 18px;
      border-radius: 10px;
      background-color: #26b59a;
      color: #fff;
      padding: 10px 30px;
      margin-left: 50%;
      transform: translate(-50%);
    }
  }
`

type Props = {
  value: Tag,
  showEdit: boolean,
  onClose: (showEdit: boolean) => void
}

const TagEdit: React.FC<Props> = (props) => {
  const {updateTag, findTag} = useTags()
  const [showEdit, setShowEdit] = useState(false)
  const getClass = () => {
    return showEdit ? 'show' : 'hide'
  }
  let {id} = props.value
  const tag = findTag(id)

  useEffect(() => {
    setShowEdit(props.showEdit)
  }, [props.showEdit])
  return (
    <TagEditWrapper className={getClass()}>
      <div className="tagEdit">
        <TopBar pageTitle='编辑标签' closeIcon={true} onClose={() => {
          setShowEdit(false)
          props.onClose(false)
        }} />
        <div className="editIcon">
          <label className='legend'>图标</label>
          <Icon name={tag?.iconName} />
        </div>
        <div className="editName">
          <label>标签名</label>
          <input value={tag?.chinese} onChange={(e) => {
            updateTag(tag.id, {chinese: e.target.value})
          }} />
        </div>
        <button className='submit'>确定修改</button>
      </div>
    </TagEditWrapper>
  )
}

export {TagEdit}