let tagId = parseInt(window.localStorage.getItem('tagIdMax') || '0')
let recordId = parseInt(window.localStorage.getItem('recordIdMax') || '0')
const createTagId = ():number => {
  tagId += 1
  window.localStorage.setItem('tagIdMax', JSON.stringify(tagId))
  return tagId
}
const createRecordId = ():number => {
  recordId += 1
  window.localStorage.setItem('recordIdMax', JSON.stringify(recordId))
  return recordId
}

export {createTagId, createRecordId}