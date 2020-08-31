import React from 'react'

import { PageWrapper } from '@/lib/page'
import { useQueryContents } from '@/features/contents'
import { List } from '@/features/contents'
import { SeoTags } from '@/lib/Seo'

function Home() {
  const { data, status } = useQueryContents('news', {
    limit: 8,
  })

  return (
    <PageWrapper>
      <SeoTags title="Home" />

      <div>
        {status === 'loading' ? (
          <div>Loading...</div>
        ) : (
          <List posts={data.results} />
        )}
      </div>
    </PageWrapper>
  )
}

export default Home
