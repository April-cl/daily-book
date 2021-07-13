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
  const findTag = (id: number) => {
    return tags.filter((tag) => {
      return tag.id ===id
    })[0]
  }
  const findTagIndex = (id: number) => {
    let result = -1
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i
        break
      }
    }
    return result
  }
  const updateTag = (id: number, obj: {chinese: string}) => {
    const index = findTagIndex(id)
    const cloneTags = JSON.parse(JSON.stringify(tags))
    cloneTags.splice(index, 1, {...cloneTags[index], chinese: obj.chinese})
    setTags(cloneTags)
  }
  const deleteTag = (id: number) => {
    const index = findTagIndex(id)
    const cloneTags = JSON.parse(JSON.stringify(tags))
    cloneTags.splice(index, 1)
    setTags(cloneTags)
  }
  return {tags, setTags, findTag, findTagIndex, updateTag, deleteTag}
}

export {useTags}