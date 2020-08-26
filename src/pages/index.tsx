import React from 'react'

import { PageWrapper } from '@/lib/page'
import { usePosts } from '@/features/posts/services'

function Home() {
  const { data: posts, status } = usePosts()

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <PageWrapper>
      <div>
        {posts.map((post) => {
          return <div key={post.id}>{post.title}</div>
        })}
      </div>
    </PageWrapper>
  )
}

export default Home
