import React, { useState, useEffect } from 'react'
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
  const router = useRouter()
  const initialSorting = 'newest'
  const [orderBy, setOrderBy] = useState(initialSorting)
  const { query, asPath } = router

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

  useEffect(() => {
    if (orderBy !== initialSorting) {
      setOrderBy(initialSorting)
    }
  }, [asPath])

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
            enableReinitialize
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
