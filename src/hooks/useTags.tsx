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
        {id: createTagId(), iconName: 'study',chinese: '学习'},
        {id: createTagId(), iconName: 'transportation',chinese: '交通'},
        {id: createTagId(), iconName: 'enjoy',chinese: '娱乐'},
        {id: createTagId(), iconName: 'gift',chinese: '礼物'},
        {id: createTagId(), iconName: 'hair',chinese: '理发'},
        {id: createTagId(), iconName: 'kid',chinese: '婴儿用品'},
        {id: createTagId(), iconName: 'medical',chinese: '医药费'},
        {id: createTagId(), iconName: 'movie',chinese: '电影'},
        {id: createTagId(), iconName: 'packet',chinese: '红包'},
        {id: createTagId(), iconName: 'rent',chinese: '房租'},
        {id: createTagId(), iconName: 'salary',chinese: '工资'},
        {id: createTagId(), iconName: 'servicing',chinese: '维修'},
        {id: createTagId(), iconName: 'shopping',chinese: '逛街'},
        {id: createTagId(), iconName: 'snacks',chinese: '零食'},
        {id: createTagId(), iconName: 'socialite',chinese: '社交'},
        {id: createTagId(), iconName: 'bonus',chinese: '奖金'},
        {id: createTagId(), iconName: 'business',chinese: '营利'},
        {id: createTagId(), iconName: 'part-time',chinese: '兼职'},
        {id: createTagId(), iconName: 'refund',chinese: '退款'},
        {id: createTagId(), iconName: 'statistics',chinese: '股票'},
        {id: createTagId(), iconName: 'pay',chinese: '其它支出'},
        {id: createTagId(), iconName: 'revenue',chinese: '其他收入'}
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