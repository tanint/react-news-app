import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

import { Container } from '@/components/uikit'
import { Header } from '../Header'

interface MainLayoutProps {
  children: ReactNode
}

function MainLayout(props: MainLayoutProps) {
  return (
    <Grid>
      <Header />
      <div>
        <Container>{props.children}</Container>
      </div>
      <div
        css={{
          backgroundColor: 'var(--color-primary)',
          height: '200px',
          marginTop: 'var(--space10)',
        }}
      ></div>
    </Grid>
  )
}

const Grid = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
`

export default MainLayout
