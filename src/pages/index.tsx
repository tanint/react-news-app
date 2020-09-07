import React from 'react'
import Link from 'next/link'

import { useQueryContents } from '@/features/contents'
import { List } from '@/features/contents'
import { SeoTags } from '@/lib/Seo'
import { BookmarkButton } from '@/components/BookmarkButton'
import { PageHeader } from '@/components/Layouts/PageHeader'
import { SelectInput } from '@/components/SelectInput'

function Home() {
  const [orderBy, setOrderBy] = React.useState('newest')
  const { data, status } = useQueryContents('world', {
    limit: 8,
  })

  return (
    <div>
      <SeoTags title="Home" />
      <PageHeader
        title="Top stories"
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
