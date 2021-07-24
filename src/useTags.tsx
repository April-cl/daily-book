import { useEffect, useState } from 'react';
import { createId } from './lib/createId';
import { useUpdate } from './hooks/useUpdate';

const useTags = () => {
  const [tags, setTags] = useState<Tag[]>([])
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), iconName: 'diet',chinese: '餐饮'},
        {id: createId(), iconName: 'clothes',chinese: '服饰'},
        {id: createId(), iconName: 'family',chinese: '家用'},
        {id: createId(), iconName: 'study',chinese: '学习'}
      ]
    }
    setTags(localTags)
  }, [])
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags))
  }, [tags])
  const findTag = (id: number) => {
    return tags.filter((tag) => {
      return tag.id === id
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
  const updateTag = (id: number, {chinese}: {chinese: string}) => {
    const index = findTagIndex(id)
    const cloneTags = JSON.parse(JSON.stringify(tags))
    cloneTags.splice(index, 1, {...cloneTags[index], chinese: chinese})
    setTags(cloneTags)
  }
  const deleteTag = (id: number) => {
    const index = findTagIndex(id)
    const cloneTags = JSON.parse(JSON.stringify(tags))
    cloneTags.splice(index, 1)
    setTags(cloneTags)
  }
  const addTag = (tagName: string) => {
    // const tagName = window.prompt('新标签的名称为');
    if (tagName !== null && tagName !== '') {
      setTags([...tags, {id: createId(), iconName: 'custom', chinese: tagName}]);
    }
  };
  return {tags, setTags, findTag, findTagIndex, updateTag, deleteTag, addTag}
}

export {useTags}