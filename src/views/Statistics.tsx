import Layout from '../components/Layout';
import React, { useState } from 'react';
import { CategorySection } from './Edit/CategorySection';
import { useRecords } from '../hooks/useRecords';
import dayjs from 'dayjs';
import styled from 'styled-components';
import Icon from '../components/Icon';
import { Link } from 'react-router-dom';
import { DateSelectSection } from './Statistics/DateSelectSection';
import { DailyComparisonChart } from './Statistics/DailyComparisonChart';
import { TagsComparisonChart } from './Statistics/TagsComparisonChart';

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
  > .delete, > .edit {
    font-size: 16px;
    margin-left: 10px;
  }
  > .delete {
    fill: #fc2b29;
  }
`
const AmountTotal = styled.div`
  padding: 0 20px;
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: #fff;
`
const Header = styled.div`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  position: relative;
  > .total {
    position: absolute;right: 16px;
  }
`

function Statistics() {
  const [currentDate, setCurrentDate] = useState(dayjs().format('YYYY-MM'))
  const [disabled, setDisabled] = useState(true)
  const [category, setCategory] = useState<'-' | '+'>('-')
  const { records, deleteRecord } = useRecords()
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
  const hashByDate: { [Date: string]: RecordItem[] } = {}
  const hashByTag: { [Tag: string]: RecordItem[] } = {}
  const selectedRecords = disabled ? records.filter(record => record.category === category) : records.filter(record => (record.category === category) && (record.createAt.slice(0, 7) === currentDate))
  selectedRecords.map(record => {
    const date = record.createAt
    const tag = record.tag.chinese
    if (!(date in hashByDate)) {
      hashByDate[date] = []
    }
    if (!(tag in hashByTag)) {
      hashByTag[tag] = []
    }
    hashByDate[date].push(record)
    hashByTag[tag].push(record)
  })
  const hashByDateArray = Object.entries(hashByDate).sort((a, b) => {
    return dayjs(b[0]).valueOf() - dayjs(a[0]).valueOf()
  })
  const hashByTagArray = Object.entries(hashByTag)
  const getAmountTotal = () => selectedRecords.reduce((sum, item) => { return sum + item.amount }, 0)
  const getDailyData = () => {
    return {
      date: hashByDateArray.filter(item => item[0]).map(item => item[0]),
      amount: hashByDateArray.map(item => item[1].reduce((sum, i) => {return sum + i.amount},0))
    };
  }
  console.log(hashByTag);
  console.log(hashByTagArray);
  const getTagData = () => {
    const obj = {
      name: hashByTagArray.filter(item => item[0]).map(item => item[0]),
      value: hashByTagArray.map(item => item[1].reduce((sum, i) => {return sum + i.amount},0))
    }
    let array = []
    for (let i = 0; i < obj.name.length; i++) {
      array.push({
        name: obj.name[i],
        value: obj.value[i]
      })
    }
    return array;
  }
  console.log(getTagData());
  return (
    <Layout>
      <CategorySection value={category} onChange={value => setCategory(value)} />
      <AmountTotal>
        <DateSelectSection value={currentDate} onChange={(date) => {
          setCurrentDate(date)
        }} disabled={disabled} toggle={() => setDisabled(!disabled)} />
        <div>总{category === '-' ? '支出' : '收入'}：￥{getAmountTotal()}</div>
      </AmountTotal>
      <DailyComparisonChart data={getDailyData()} />
      <TagsComparisonChart data={getTagData()} />
      {hashByDateArray.map(([date, records]) => {
        return (
          <div key={date}>
            <Header>
              {beautify(date)}
              <span className='total'>￥{records.reduce((sum, item) => {
                return sum + item.amount;
              }, 0)}</span>
            </Header>
            {records.map(record => {
              return (
                <div key={record.id}>
                  <RecordItem>
                    <Icon name={record.tag.iconName} />
                    <span className="tagName">{record.tag.chinese}</span>
                    <span className='note'>{record.note}</span>
                    <span className='amount'>￥{record.amount}</span>
                    <Link to={'/edit/' + record.id} className='edit'>
                      <Icon name='modify' />
                    </Link>
                    <button className='delete' onClick={() => {
                      deleteRecord(record.id)
                    }}>
                      <Icon name='delete' />
                    </button>
                  </RecordItem>
                </div>
              )
            })}
          </div>)
      })}
    </Layout>
  );
}

export { Statistics }