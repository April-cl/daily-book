import { useState } from 'react';
import { createId } from './lib/createId';

const defaultTags = [
  {id: createId(), iconName: 'diet',chinese: '餐饮'},
  {id: createId(), iconName: 'clothes',chinese: '服饰'},
  {id: createId(), iconName: 'family',chinese: '家用'},
  {id: createId(), iconName: 'study',chinese: '学习'}
]
const useTags = () => {
  const [tags, setTags] = useState<{id: number, iconName: string, chinese: string}[]>(defaultTags)
  return {tags, setTags}
}

export {useTags}