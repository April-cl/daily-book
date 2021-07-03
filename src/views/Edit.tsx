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

type Category = '-' | '+'

function Edit() {
  const [record, setRecord] = useState({
    category: '-' as Category,
    tag: '',
    note: '',
    amount: 0
  })
  return (
    <EditLayout>
      {record.amount}
      <CategorySection value={record.category} onChange={(category) => {
        setRecord({
          ...record,
          category: category
        })}} />
      <OutputSection value={record.amount} />
      <TagsSection value={record.tag} onChange={(tag) => {
        setRecord({
          ...record,
          tag: tag
        })
      }} />
      <DateSection />
      <NotesSection value={record.note} onChange={(note: string) => {
        setRecord({
          ...record,
          note: note
        })
      }} />
      <NumberPadSection value={record.amount} onChange={(amount) => {
        setRecord({
          ...record,
          amount: amount
        })
      }} />
    </EditLayout>
  );
}

export default Edit;