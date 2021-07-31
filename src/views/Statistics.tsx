import Layout from '../components/Layout';
import React, { useState } from 'react';
import { CategorySection } from './Edit/CategorySection';
import { useRecords } from '../hooks/useRecords';
import dayjs from 'dayjs';
import styled from 'styled-components';

const RecordItem = styled.div`
  display:flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    //margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-')
  const {records} = useRecords()
  return (
    <Layout>
      <CategorySection value={category} onChange={value => setCategory(value)} />
      <div>
        {records.map(record => {
          return (
            <RecordItem key={records.indexOf(record)}>
              <span className="tag">{record.tag.chinese}</span>
              <span className='note'>{record.note}</span>
              <span className='amount'>￥{record.amount}</span>
              <span>{dayjs(record.createAt).format('YYYY年M月D日')}</span>
            </RecordItem>
          )
        })}
      </div>
    </Layout>
  );
}

export { Statistics }