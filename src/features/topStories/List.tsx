import React from 'react'
import Link from 'next/link'
import { useTheme } from 'emotion-theming'

import { NewsCard, NewsContent } from '@/components/NewsCard'
import { chunkByPattern } from './helpers'

export const List = (props) => {
  const { posts } = props
  const { media } = useTheme()
  const [posts1, posts2, posts3, posts4] = chunkByPattern(
    posts,
    '0|1,2|3,4|5,6,7',
  )

  return (
    <div css={{ marginBottom: 'var(--space8)' }}>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--space8)',
          marginBottom: 'var(--space8)',
          overflow: 'hidden',

          [media.sm]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
          },

          [media.md]: {
            gridTemplateColumns: 'repeat(4, 1fr)',
          },
        }}
      >
        <div
          css={{
            gridArea: '1',

            [media.sm]: {
              gridArea: '1 / 1 / 3 / 3',
              gridTemplateColumns: 'repeat(2, 1fr)',
            },
          }}
        >
          <Link href="/[section]/[...all]" as={`/${posts1[0].id}`}>
            <a>
              <NewsCard
                title={posts1[0].title}
                thumbnail={posts1[0].thumbnail}
                description={posts1[0].body}
                section={posts1[0].section}
                ratio={860 / 1090}
              />
            </a>
          </Link>
        </div>
        {posts2.map((post2) => (
          <div key={post2.id}>
            <Link href="/[section]/[...all]" as={`/${post2.id}`}>
              <a>
                <NewsCard
                  title={post2.title}
                  thumbnail={post2.thumbnail}
                  section={post2.section}
                />
              </a>
            </Link>
          </div>
        ))}
        {posts3.map((post3) => (
          <div key={post3.id}>
            <Link href="/[section]/[...all]" as={`/${post3.id}`}>
              <a>
                <NewsContent title={post3.title} section={post3.section} />
              </a>
            </Link>
          </div>
        ))}
      </div>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--space8)',

          [media.sm]: {
            gridTemplateColumns: 'repeat(3, 1fr)',
          },
        }}
      >
        {posts4.map((post4) => (
          <div key={post4.id}>
            <Link href="/[section]/[...all]" as={`/${post4.id}`}>
              <a>
                <NewsCard
                  title={post4.title}
                  thumbnail={post4.thumbnail}
                  description={post4.body}
                  section={post4.section}
                />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
