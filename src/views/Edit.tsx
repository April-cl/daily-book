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
    output: '0',
    tag: '',
    note: '',
  })
  return (
    <EditLayout>
      <CategorySection value={record.category} onChange={(category) => {
        setRecord({
          ...record,
          category: category
        })}} />
      <OutputSection output={record.output} />
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
      <NumberPadSection />
    </EditLayout>
  );
}

export default Edit;