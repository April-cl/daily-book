import Layout from '../components/Layout';
import React from 'react';
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
  return (
    <EditLayout>
      <CategorySection />
      <OutputSection />
      <TagsSection />
      <DateSection />
      <NotesSection />
      <NumberPadSection />
    </EditLayout>
  );
}

export default Edit;