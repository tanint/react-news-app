import React from 'react'
import Link from 'next/link'

import { useQueryContents } from '@/features/contents'
import { List } from '@/features/contents'
import { Loading } from '@/components/Loading'
interface CategorySectionProps {
  section: {
    slug: string
    title: string
  }
  orderBy: string
}

function CategorySection(props: CategorySectionProps) {
  const { section, orderBy } = props

  const { data, status } = useQueryContents(section.slug, {
    limit: 3,
    orderBy,
  })

  return (
    <div>
      <div
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 'var(--space4) 0',
        }}
      >
        <h2
          css={{
            fontFamily: 'Georgia,serif',
            fontSize: '36px',
            textTransform: 'capitalize',
            fontWeight: 700,
          }}
        >
          {section.title}
        </h2>
        <div>
          <Link
            key={section.slug}
            href="/[section]"
            as={`/${section.slug}`}
            passHref
          >
            <a css={{ textDecoration: 'underline' }}>See all</a>
          </Link>
        </div>
      </div>
      {status === 'loading' ? <Loading /> : <List posts={data.results} />}
    </div>
  )
}

export default CategorySection
