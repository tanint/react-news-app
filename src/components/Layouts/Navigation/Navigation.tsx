import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

const menuConfig = [
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

function Navigation() {
  return (
    <div>
      <Menu>
        <Link href="/" passHref>
          <LinkItem slug="news">News Today</LinkItem>
        </Link>
        {menuConfig.map((menu) => {
          return (
            <Link
              key={menu.slug}
              href="[section]"
              as={`/${menu.slug}`}
              passHref
            >
              <LinkItem slug={menu.slug}>{menu.title}</LinkItem>
            </Link>
          )
        })}
        <SearchSection>Search</SearchSection>
      </Menu>
    </div>
  )
}

const LinkItem = styled.a(({ slug }: { slug: string }) => ({
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

const Menu = styled.div`
  display: flex;
`

const SearchSection = styled.div`
  margin-left: auto;
`

export default Navigation