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
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`

const Header = styled.div`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-')
  const {records} = useRecords()
  const beautify = (string: string) => {
    const day = dayjs(string);
    const now = dayjs();
    if (day.isSame(now, "day")) {
      return "今天";
    } else if (day.isSame(now.subtract(1, "day"), "day")) {
      return "昨天";
    } else if (day.isSame(now, "year")) {
      return day.format("M月D日");
    } else {
      return day.format("YYYY年M月D日");
    }
  }
  const hash: {[Key: string]: RecordItem[]} = {}
  const selectedRecords = records.filter(record => record.category === category)
  selectedRecords.map(record => {
    const key = beautify(record.createAt)
    if (!(key in hash)) {
      hash[key] = []
    }
    hash[key].push(record)
  })
  const hashArray = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0
    if (a[0] > b[0]) return 1
    return -1
  })
  return (
    <Layout>
      <CategorySection value={category} onChange={value => setCategory(value)} />
      {hashArray.map(([date, records]) => {
        return (
          <div key={date}>
            <Header>
              {date}
            </Header>
            <div>
              {records.map(record => {
                return (
                  <RecordItem key={records.indexOf(record)}>
                    <span className="tag">{record.tag.chinese}</span>
                    <span className='note'>{record.note}</span>
                    <span className='amount'>￥{record.amount}</span>
                  </RecordItem>
                )
              })}
            </div>
          </div>)
      })}
    </Layout>
  );
}

export { Statistics }