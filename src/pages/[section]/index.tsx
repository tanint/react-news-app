import React from 'react'
import { useRouter } from 'next/router'
import { isEmpty } from 'lodash'
import Link from 'next/link'

import { LoadMore, useInfiniteQueryContents } from '@/features/contents'
import { List } from '@/features/contents'
import { SeoTags } from '@/lib/Seo'
import { SelectInput } from '@/components/SelectInput'
import { Loading } from '@/components/Loading'
import { BookmarkButton } from '@/components/BookmarkButton'
import { PageHeader } from '@/components/Layouts/PageHeader'

function Section() {
  const { query } = useRouter()
  const [orderBy, setOrderBy] = React.useState('newest')

  const {
    canFetchMore,
    data,
    status,
    fetchMore,
    isFetchingMore,
  } = useInfiniteQueryContents(
    query.section,
    { orderBy },
    { enabled: !isEmpty(query) },
  )

  const section = query.section as string

  return (
    <div>
      <SeoTags title={section} />
      <PageHeader
        title={section}
        renderBookmark={() => (
          <Link href="/bookmarks">
            <a>
              <BookmarkButton />
            </a>
          </Link>
        )}
        renderSorting={() => (
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
        )}
      />
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

export default Section
