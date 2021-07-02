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
    tag: '',
    note: '',
    category: '-' as Category,
    output: '0'
  })
  return (
    <EditLayout>
      <CategorySection value={record.category} onChange={(category) => {
        setRecord({
          ...record,
          category: category
        })}} />
      <OutputSection output={record.output} />
      <TagsSection />
      <DateSection />
      <NotesSection />
      <NumberPadSection />
    </EditLayout>
  );
}

export default Edit;