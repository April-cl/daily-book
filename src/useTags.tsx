import { useState } from 'react';

const useTags = () => {
  const defaultTags = [
    {id: 1, iconName: 'diet',chinese: '餐饮'},
    {id: 2, iconName: 'clothes',chinese: '服饰'},
    {id: 3, iconName: 'family',chinese: '家用'},
    {id: 4, iconName: 'study',chinese: '学习'}
  ]
  const [tags, setTags] = useState<{id: number, iconName: string, chinese: string}[]>(defaultTags)
  return {tags, setTags}
}

export {useTags}