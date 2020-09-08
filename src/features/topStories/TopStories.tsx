import React from 'react'

import { useQueryContents } from '@/features/contents'
import { Loading } from '@/components/Loading'
import { List } from './List'
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
      {status === 'loading' ? <Loading /> : <List posts={data.results} />}
    </div>
  )
}

export default TopStories
