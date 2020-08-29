import React from 'react'
import Link from 'next/link'

import { NewsCard } from '@/components/NewsCard'

function List(props) {
  const { posts = [] } = props

  return (
    <div
      css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 'var(--space6)',
      }}
    >
      {posts.map((post) => (
        <Link key={post.id} href="/[section]/[...all]" as={`/${post.id}`}>
          <a>
            <NewsCard
              title={post.title}
              thumbnail={post.thumbnail}
              description={post.body}
            />
          </a>
        </Link>
      ))}
    </div>
  )
}

export default List
