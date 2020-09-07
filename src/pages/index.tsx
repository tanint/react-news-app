import React, { useState } from 'react'
import Link from 'next/link'

import { SeoTags } from '@/lib/Seo'
import { BookmarkButton } from '@/components/BookmarkButton'
import { PageHeader } from '@/components/Layouts/PageHeader'
import { SelectInput } from '@/components/SelectInput'
import { TopStories, CategorySection } from '@/features/topStories'
import { sectionConfig } from '@/components/Layouts/Navigation'

function Home() {
  const [orderBy, setOrderBy] = useState('newest')

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
      <TopStories orderBy={orderBy} />
      {sectionConfig.map((section) => (
        <CategorySection
          key={section.slug}
          section={section}
          orderBy={orderBy}
        />
      ))}
    </div>
  )
}

export default Home
