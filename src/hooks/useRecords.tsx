import { useEffect, useState } from 'react';
import { useUpdate } from './useUpdate';
import { createRecordId } from '../lib/createId';

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([])
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
  }, [])
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records))
  }, records)
  const findRecord = (id: number) => {
    return records.filter((record) => {
      return record.id === id
    })[0]
  }
  const testRecord = (record: RecordItem) => {
    if (record.amount <= 0) {
      return 1
    }
    if (record.tag.id === 0) {
      return 2
    }
    return 0
  }
  const addRecord = (record: RecordItem) => {
    setRecords([...records, {...record, id: createRecordId()}])
  }
  const deleteRecord = (id: number) => {
    setRecords(records.filter(record => record.id !== id))
  }
  const updateRecord = (newRecord: RecordItem) => {
    // @ts-ignore
    setRecords(records.map((record) => {
      if (record.id === newRecord.id) {
        record = newRecord
      }
      return record
    }))
  }
  return {records, addRecord, deleteRecord, findRecord, updateRecord, testRecord}
}