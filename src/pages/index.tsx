import React from 'react'

import { useQueryContents } from '@/features/contents'
import { List } from '@/features/contents'
import { SeoTags } from '@/lib/Seo'

function Home() {
  const { data, status } = useQueryContents('world', {
    limit: 8,
  })

  return (
    <div>
      <SeoTags title="Home" />

      <div>
        {status === 'loading' ? (
          <div>Loading...</div>
        ) : (
          <List posts={data.results} />
        )}
      </div>
    </div>
  )
}

export default Home
