import React from 'react'

import { useQueryContents } from '@/features/contents'
import { List } from '@/features/contents'

interface TopStoriesProps {
  orderBy: string
}

function TopStories(props: TopStoriesProps) {
  const { orderBy } = props

  const { data, status } = useQueryContents('world', {
    limit: 8,
    orderBy,
  })

  return (
    <div>
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : (
        <List posts={data.results} />
      )}
    </div>
  )
}

export default TopStories
