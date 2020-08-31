import React from 'react'
import { useRouter } from 'next/router'
import { isEmpty } from 'lodash'
import { useInfiniteQuery } from 'react-query'

import { PageWrapper } from '@/lib/page'
import { getContents, LoadMore } from '@/features/contents'
import { List } from '@/features/contents'
import { SeoTags } from '@/lib/Seo'
import { SelectInput } from '@/components/SelectInput'

function Section() {
  const { query } = useRouter()

  const {
    canFetchMore,
    data,
    status,
    fetchMore,
    isFetchingMore,
  } = useInfiniteQuery({
    queryKey: [
      query.section,
      {
        limit: 9,
      },
    ],
    queryFn: getContents,
    config: {
      enabled: !isEmpty(query),
      getFetchMore: (lastGroup) => {
        const nextPage = lastGroup.currentPage + 1

        if (nextPage > lastGroup.pages) return false

        return nextPage
      },
    },
  })

  return (
    <PageWrapper>
      <SeoTags title={query.section} />
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
        {status !== 'success' ? (
          <div>Loading...</div>
        ) : (
          <div>
            {data.map((group) => {
              return <List key={group.currentPage} posts={group.results} />
            })}
          </div>
        )}
      </div>
      {canFetchMore && (
        <div css={{ display: 'flex', justifyContent: 'center' }}>
          <LoadMore isLoading={!!isFetchingMore} onClick={() => fetchMore()}>
            {!!isFetchingMore ? 'Loading' : 'Load more'}
          </LoadMore>
        </div>
      )}
    </PageWrapper>
  )
}

export default Section
