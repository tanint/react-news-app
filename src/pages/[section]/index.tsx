import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { isEmpty } from 'lodash'

import { PageWrapper } from '@/lib/page'
import { getTopStories } from '@/features/topStories'
import { List } from '@/features/topStories'
import { SeoTags } from '@/lib/Seo'
import { SelectInput } from '@/components/SelectInput'

function Section() {
  const { query } = useRouter()

  const { data: posts, status } = useQuery({
    queryKey: [
      query.section,
      {
        limit: 9,
      },
    ],
    queryFn: getTopStories,
    config: {
      enabled: !isEmpty(query),
    },
  })

  return (
    <PageWrapper>
      <SeoTags title={query.section as string} />
      <div
        css={{
          padding: 'var(--space6) 0',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
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
        <div css={{ minWidth: '300px' }}>
          <SelectInput
            initialValue="newest"
            onChange={(value) => {
              console.log(value)
            }}
            options={[
              {
                label: 'Newest First',
                value: 'newest',
              },
              {
                label: 'Oldest First',
                value: 'oldest',
              },
            ]}
          />
        </div>
      </div>
      <div>
        {status === 'loading' ? <div>Loading...</div> : <List posts={posts} />}
      </div>
    </PageWrapper>
  )
}

export default Section
