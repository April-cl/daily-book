import Layout from '../components/Layout';
import React, { useState } from 'react';
import styled from 'styled-components';
import { CategorySection } from './Edit/CategorySection';
import { OutputSection } from './Edit/OutputSection';
import { DateSection } from './Edit/DateSection';
import { NotesSection } from './Edit/NotesSection';
import { NumberPadSection } from './Edit/NumberPadSection';
import { TagsSection } from './Edit/TagsSection';
import { useRecords } from '../hooks/useRecords';
import { TagEdit } from './Tags/TagEdit';
import { useModal } from '../hooks/useModal';
import { Tooltip } from '../components/Tooltip';

const EditLayout = styled(Layout)`
    display:flex;
    flex-direction: column;
`

const defaultRecord: RecordItem = {
  category: '-' as Category,
  tag: {id:0, chinese:'', iconName:''},
  note: '',
  amount: 0,
  createAt: (new Date()).toISOString()
}

function Edit() {
  const [record, setRecord] = useState(defaultRecord)
  const {addRecord} = useRecords()
  const [output, setOutput] = useState('0')
  const onChange = (obj: Partial<typeof record>) => {
    setRecord({
      ...record,
      ...obj
    })
  }
  const submit = () => {
    addRecord(record)
    setRecord(defaultRecord)
  }
  return (
    <EditLayout>
      {JSON.stringify(record)}
      <CategorySection value={record.category} onChange={(category) => {onChange({category})}} />
      <OutputSection output = {output} tag = {record.tag.chinese} />
      <TagsSection value={record.tag} onChange={(tag) => {onChange({tag})}} />
      <DateSection value = {record.createAt} onChange={(createAt) => {onChange({createAt});}} />
      <NotesSection value={record.note} onChange={(note: string) => {onChange({note})}} />
      <NumberPadSection value={record.amount} onChange={(amount, output) => {
        onChange({amount})
        setOutput(output)
      }} onOk={submit} />
    </EditLayout>
  );
}

export default Edit;