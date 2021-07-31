import { useEffect, useState } from 'react';
import { useUpdate } from './useUpdate';

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([])
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
  }, [])
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records))
  }, [records])
  const addRecord = (record: RecordItem) => {
    if (record.amount <= 0) {
      return '金额还没写呢！'
    }
    if (record.tag.id === 0) {
      return '标签还没选呢！'
    }
    setRecords([...records, record])
    return '小的记下啦~'
  }
  return {records, addRecord}
}