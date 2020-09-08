import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { useTheme, EmotionTheming } from 'emotion-theming'

import { SearchContainer } from '@/features/search'

export const sectionConfig = [
  {
    title: 'Sports',
    slug: 'sport',
  },
  {
    title: 'Culture',
    slug: 'culture',
  },
  {
    title: 'LifeStyle',
    slug: 'lifeandstyle',
  },
]

export const Navigation = () => {
  const { media } = useTheme()

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',

        [media.md]: {
          flexDirection: 'row',
        },
      }}
    >
      <Link href="/" passHref>
        <LinkItem slug="news">News Today</LinkItem>
      </Link>
      {sectionConfig.map((menu) => {
        return (
          <Link key={menu.slug} href="/[section]" as={`/${menu.slug}`} passHref>
            <LinkItem slug={menu.slug}>{menu.title}</LinkItem>
          </Link>
        )
      })}
      <div
        css={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',

          [media.md]: {
            justifyContent: 'flex-end',
          },
        }}
      >
        <SearchContainer />
      </div>
    </div>
  )
}

type LinkItemProps = { slug: string }

const LinkItem = styled.a(({ slug }: LinkItemProps) => ({
  color: '#fff',
  textDecoration: 'none',
  borderBottom: `3px solid var(--color-${slug})`,
  minWidth: '195px',
  textAlign: 'center',
  textTransform: 'uppercase',
  padding: 'var(--space3) 0',
  transition: 'background-color 0.1s ease-in-out',

  '&:hover': {
    backgroundColor: 'var(--color-primary-light)',
  },
}))
