import { useEffect, useState } from 'react';
import { createTagId } from 'lib/createId';
import { useUpdate } from './useUpdate';

const useTags = () => {
  const [tags, setTags] = useState<Tag[]>([])
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
    if (localTags.length === 0) {
      localTags = [
        {id: createTagId(), iconName: 'diet',chinese: '餐饮'},
        {id: createTagId(), iconName: 'clothes',chinese: '服饰'},
        {id: createTagId(), iconName: 'family',chinese: '家用'},
        {id: createTagId(), iconName: 'study',chinese: '学习'}
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
  const testTag = (chinese: string) => {
    console.log(tags.filter((tag) => {return tag.chinese === chinese;}));
    if (chinese === '') {
      return 1
    } else if (tags.filter((tag) => {return tag.chinese === chinese}).length > 0) {
      return 2
    }
    return 0
  }
  const updateTag = (id: number, chinese: string) => {
    setTags(tags.map((tag) => {
      if (tag.id === id) {
        tag = {...tag, chinese}
      }
      return tag
    }));
  }
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id))
  }
  const addTag = (chinese: string) => {
    setTags([...tags, {id: createTagId(), iconName: 'custom', chinese: chinese}]);
  };
  return {tags, setTags, findTag, findTagIndex, updateTag, deleteTag, addTag, testTag}
}

export {useTags}