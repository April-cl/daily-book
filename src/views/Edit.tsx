import Layout from '../components/Layout';
import React, { useState } from 'react';
import styled from 'styled-components';
import { CategorySection } from './Edit/CategorySection';
import { OutputSection } from './Edit/OutputSection';
import { DateSection } from './Edit/DateSection';
import { NotesSection } from './Edit/NotesSection';
import { NumberPadSection } from './Edit/NumberPadSection';
import { TagsSection } from './Edit/TagsSection';

const EditLayout = styled(Layout)`
    display:flex;
    flex-direction: column;
`

function Edit() {
  const [record, setRecord] = useState({
    category: '-' as Category,
    tag: {id: 0, chinese: ''},
    note: '',
    amount: 0,
    createAt: (new Date()).toISOString()
  })
  const [output, setOutput] = useState('0')
  const onChange = (obj: Partial<typeof record>) => {
    setRecord({
      ...record,
      ...obj
    })
  }
  return (
    <EditLayout>
      <CategorySection value={record.category} onChange={(category) => {onChange({category})}} />
      <OutputSection output = {output} tag = {record.tag.chinese} />
      <TagsSection value={record.tag} onChange={(tag) => {onChange({tag})}} />
      <DateSection value = {record.createAt} onChange={(createAt) => {onChange({createAt});}} />
      <NotesSection value={record.note} onChange={(note: string) => {onChange({note})}} />
      <NumberPadSection value={record.amount} onChange={(amount, output) => {
        onChange({amount})
        setOutput(output)
      }} />
    </EditLayout>
  );
}

export default Edit;