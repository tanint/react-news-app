import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

import { Container } from '@/components/uikit'
import { Navigation } from '../Navigation'

function Header() {
  return (
    <Wrapper>
      <Container>
        <Link href="/">
          <a>
            <img
              src="/images/logo-white.png"
              css={{ margin: 'var(--space8) 0 var(--space6)' }}
            />
          </a>
        </Link>
      </Container>
      <Container>
        <Navigation />
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--color-primary);
`

export default Header
