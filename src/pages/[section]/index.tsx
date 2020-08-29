import React from 'react'
import { useRouter } from 'next/router'

import { PageWrapper } from '@/lib/page'
import { useQueryTopStories } from '@/features/topStories/services'
import { List } from '@/features/topStories'
import { SeoTags } from '@/lib/Seo'

function Section() {
  const { query } = useRouter()

  console.log('router', query)
  const { data: posts, status } = useQueryTopStories({
    section: query.section as string,
    limit: 9,
  })

  return (
    <PageWrapper>
      <SeoTags title={query.section as string} />
      <div css={{ padding: 'var(--space6) 0' }}>
        <h1
          css={{
            fontFamily: 'Georgia,serif',
            fontSize: '42px',
            textTransform: 'capitalize',
            fontWeight: 700,
          }}
        >
          {query.section}
        </h1>
      </div>
      <div>
        {status === 'loading' ? <div>Loading...</div> : <List posts={posts} />}
      </div>
    </PageWrapper>
  )
}

export default Section
