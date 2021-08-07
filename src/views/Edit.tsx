import Layout from '../components/Layout';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CategorySection } from './Edit/CategorySection';
import { OutputSection } from './Edit/OutputSection';
import { DateSection } from './Edit/DateSection';
import { NotesSection } from './Edit/NotesSection';
import { NumberPadSection } from './Edit/NumberPadSection';
import { TagsSection } from './Edit/TagsSection';
import { useRecords } from '../hooks/useRecords';
import { useModal } from '../hooks/useModal';
import { Tooltip } from '../components/Tooltip';
import dayjs from 'dayjs';

const EditLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
`

const today = dayjs().format('YYYY-MM-DD')

let defaultRecord: RecordItem = {
  id: parseInt(window.localStorage.getItem('recordIdMax') || '0') + 1,
  category: '-' as Category,
  tag: {id:0, chinese:'', iconName:''},
  note: '',
  amount: 0,
  createAt: today
}

function Edit() {
  const {addRecord, findRecord, updateRecord, testRecord} = useRecords()
  let {recordId} = useParams<Params>()
  const history = useHistory()
  const outputRef = useRef(null)
  const { show, hide, RenderModal } = useModal()
  const [content, setContent] = useState('')
  const [record, setRecord] = useState(defaultRecord)
  const [output, setOutput] = useState(record.amount.toString())
  const editRecord = findRecord(parseInt(recordId))
  const onChange = (obj: Partial<typeof record>) => {
    setRecord({
      ...record,
      ...obj
    })
  }
  const submit = () => {
    show()
    const resultNumber = testRecord(record)
    if (resultNumber === 0) {
      if (recordId) {
        updateRecord(record)
      } else {
        addRecord(record)
      }
      setContent('记下啦~~~')
      setRecord(defaultRecord)
      setOutput('0')
      // @ts-ignore
      outputRef.current?.func()
    } else if (resultNumber === 1) {
      setContent('金额还没写呢！')
    } else if (resultNumber === 2) {
      setContent('标签还没选呢！')
    }
  }
  const close = () => {
    hide();
    if (recordId) {
      history.goBack()
    }
  }
  useEffect(() => {
    if (editRecord) {
      setRecord(editRecord)
      setOutput(editRecord.amount.toString())
    }
  }, [editRecord])
  return (
    <>
      <EditLayout>
        <CategorySection value={record.category} onChange={(category) => {onChange({category})}} />
        <OutputSection output = {output} tag = {record.tag.chinese} />
        <TagsSection value={record.tag} onChange={(tag) => {onChange({tag})}} />
        <DateSection value = {record.createAt} onChange={(createAt) => {onChange({createAt});}} />
        <NotesSection value={record.note} onChange={(note: string) => {onChange({note})}} />
        <NumberPadSection onRef={outputRef} value={record.amount} onChange={(amount, output) => {
          onChange({amount})
          setOutput(output)
        }} onOk={submit} />
      </EditLayout>
      <RenderModal modalTitle='提交结果'>
        <Tooltip closeModal={close} content={content}/>
      </RenderModal>
    </>
  );
}

export default Edit;