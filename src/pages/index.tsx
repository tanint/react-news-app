import React from 'react'
import { useQuery } from 'react-query'

import { PageWrapper } from '@/lib/page'
import { getTopStories } from '@/features/topStories'
import { List } from '@/features/topStories'
import { SeoTags } from '@/lib/Seo'

function Home() {
  const { data: posts, status } = useQuery({
    queryKey: [
      'news',
      {
        limit: 8,
      },
    ],
    queryFn: getTopStories,
  })

  return (
    <PageWrapper>
      <SeoTags title="Home" />

      <div>
        {status === 'loading' ? <div>Loading...</div> : <List posts={posts} />}
      </div>
    </PageWrapper>
  )
}

export default Home
