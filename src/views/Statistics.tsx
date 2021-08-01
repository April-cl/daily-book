import Layout from '../components/Layout';
import React, { useState } from 'react';
import { CategorySection } from './Edit/CategorySection';
import { useRecords } from '../hooks/useRecords';
import dayjs from 'dayjs';
import styled from 'styled-components';
import Icon from '../components/Icon';

const RecordItem = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  font-size: 16px;
  line-height: 20px;
  padding: 10px 16px;
  > .tagName {
    margin-left: 5px;
  }
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
  > .delete {
    font-size: 16px;
    fill: #fc2b29;
    margin-left: 5px;
  }
`

const Header = styled.div`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .total {
    position: absolute;right: 16px;
  }
`

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-')
  const {records, deleteRecord} = useRecords()
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
    const key = record.createAt
    if (!(key in hash)) {
      hash[key] = []
    }
    return hash[key].push(record)
  })
  const hashArray = Object.entries(hash).sort((a, b) => {
    return dayjs(b[0]).valueOf() - dayjs(a[0]).valueOf()
  })
  return (
    <Layout>
      <CategorySection value={category} onChange={value => setCategory(value)} />
      {hashArray.map(([date, records]) => {
        return (
          <div key={date}>
            <Header>
              {beautify(date)}
              <span className='total'>￥{records.reduce((sum, item) => {
                return sum + item.amount;
              }, 0)}</span>
            </Header>
            <div>
              {records.map(record => {
                return (
                  <RecordItem key={record.id}>
                    <Icon name={record.tag.iconName} />
                    <span className="tagName">{record.tag.chinese}</span>
                    <span className='note'>{record.note}</span>
                    <span className='amount'>￥{record.amount}</span>
                    <button className='delete' onClick={() => {
                      deleteRecord(record.id)
                    }}>
                      <Icon name='delete' />
                    </button>
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