import React from 'react'

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
        <NewsCard
          key={post.id}
          title={post.title}
          thumbnail={post.thumbnail}
          description={post.body}
        />
      ))}
    </div>
  )
}

export default List
