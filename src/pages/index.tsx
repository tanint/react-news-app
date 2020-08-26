import React from 'react'

import { PageWrapper } from '@/lib/page'
import { useQueryTopStories } from '@/features/topStories/services'
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
        {status === 'loading' ? (
          <div>Loading...</div>
        ) : (
          <div>
            {posts.map((post) => (
              <div key={post.id} css={{ marginBottom: '20px' }}>
                <div css={{ fontWeight: 700 }}>{post.title}</div>
                <div>{post.body}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </PageWrapper>
  )
}

export default Home
