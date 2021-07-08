import { useState } from 'react';

const useTags = () => {
  const [tags, setTags] = useState<{iconName: string, chinese: string}[]>([{iconName: 'diet',chinese: '餐饮'}])
  return {tags, setTags}
}

export {useTags}