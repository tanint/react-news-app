import React from 'react'

import { SeoTags } from '@/lib/Seo'
import { SelectInput } from '@/components/SelectInput'
import { PageHeader } from '@/components/Layouts/PageHeader'

function Bookmarks() {
  const [orderBy, setOrderBy] = React.useState('newest')

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
    </div>
  )
}

export default Bookmarks
