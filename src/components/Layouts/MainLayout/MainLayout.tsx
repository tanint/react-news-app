import React, { Fragment, ReactNode } from 'react'

import { Container } from '@/components/uikit'
import { Header } from '../Header'

interface MainLayoutProps {
  children: ReactNode
}

function MainLayout(props: MainLayoutProps) {
  return (
    <Fragment>
      <Header />
      <Container>{props.children}</Container>
      <div
        css={{
          backgroundColor: 'var(--color-primary)',
          height: '200px',
          marginTop: 'var(--space10)',
        }}
      ></div>
    </Fragment>
  )
}

export default MainLayout
