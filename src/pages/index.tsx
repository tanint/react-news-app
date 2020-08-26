import React from 'react'

import { PageWrapper } from '@/lib/page'
import { usePosts } from '@/features/posts/services'
import { SeoTags } from '@/lib/Seo'

function Home() {
  const { data: posts, status } = usePosts()

  return (
    <PageWrapper>
      <SeoTags title="Home" />

      <div>
        {status === 'loading' ? (
          <div>Loading...</div>
        ) : (
          <div>
            {posts.map((post) => (
              <div key={post.id}>{post.title}</div>
            ))}
          </div>
        )}
      </div>
    </PageWrapper>
  )
}

export default Home
