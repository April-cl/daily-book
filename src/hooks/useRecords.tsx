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
      return 1
    }
    if (record.tag.id === 0) {
      return 2
    }
    setRecords([...records, record])
    return 0
  }
  return {records, addRecord}
}