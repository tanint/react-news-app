import React, { useState } from 'react'

import { SeoTags } from '@/lib/Seo'
import { SelectInput } from '@/components/SelectInput'
import { PageHeader } from '@/components/Layouts/PageHeader'

import { useLocalBookmarks } from '@/features/bookmarks'
import { List } from '@/features/contents'

function Bookmarks() {
  const [orderBy, setOrderBy] = useState('newest')
  const { bookmarks } = useLocalBookmarks()
  const section = 'All bookmark'

  return (
    <div>
      <SeoTags title={section} />
      <PageHeader
        title={section}
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
        <List posts={bookmarks} />
      </div>
    </div>
  )
}

export default Bookmarks
