import React from 'react'
import Link from 'next/link'
import { isEmpty } from 'lodash'

import { NewsCard } from '@/components/NewsCard'

function List(props) {
  const { posts = [] } = props

  if (isEmpty(posts)) {
    return (
      <div
        css={{
          minHeight: '300px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '22px',
          fontWeight: 700,
        }}
      >
        Not Found
      </div>
    )
  }

  return (
    <div
      css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 'var(--space8)',
        marginBottom: 'var(--space8)',
      }}
    >
      {posts.map((post) => (
        <Link key={post.id} href="/[section]/[...all]" as={`/${post.id}`}>
          <a>
            <NewsCard
              title={post.title}
              thumbnail={post.thumbnail}
              section={post.section}
            />
          </a>
        </Link>
      ))}
    </div>
  )
}

export default List
