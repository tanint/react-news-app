import React from 'react'
import { useRouter } from 'next/router'

import { LoadMore, useInfiniteQueryContents } from '@/features/contents'
import { List } from '@/features/contents'
import { SeoTags } from '@/lib/Seo'
import { SelectInput } from '@/components/SelectInput'
import { Loading } from '@/components/Loading'

function Search() {
  const { query } = useRouter()
  const [orderBy, setOrderBy] = React.useState('newest')

  const {
    canFetchMore,
    data,
    status,
    fetchMore,
    isFetchingMore,
  } = useInfiniteQueryContents('', {
    orderBy,
    q: query.q as string,
  })

  return (
    <div>
      <SeoTags title={`Search: ${query.q || ' Not Found'}`} />
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
          Search result
        </h1>
        <div css={{ minWidth: '300px' }}>
          <SelectInput
            initialValue={orderBy}
            onChange={(value) => {
              setOrderBy(value)
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
          <Loading />
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
    </div>
  )
}

export default Search
