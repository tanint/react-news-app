import React from 'react'
import styled from '@emotion/styled'

import { NewsContentProps } from './types'

function NewsContent(props: NewsContentProps) {
  const { title, description } = props

  return (
    <Content>
      <Title>{title}</Title>
      {description && <Desc>{description}</Desc>}
    </Content>
  )
}

const Content = styled.div`
  background-color: rgba(9, 53, 123, 0.9);
  padding: var(--space4);
`

const Title = styled.h2`
  font-weight: 700;
  font-size: 20px;
  color: #fff;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.5;
`

const Desc = styled.p`
  color: #fff;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.3;
  margin-top: var(--space3);
`

export default NewsContent
