import React from 'react'

import { PageWrapper } from '@/lib/page'
import { useQueryTopStories } from '@/features/topStories/services'
import { List } from '@/features/topStories'
import { SeoTags } from '@/lib/Seo'

function Home() {
  const { data: posts, status } = useQueryTopStories({
    section: 'news',
    limit: 8,
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
