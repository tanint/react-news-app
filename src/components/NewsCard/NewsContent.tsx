import React from 'react'
import styled from '@emotion/styled'

import { NewsContentProps } from './types'

function NewsContent(props: NewsContentProps) {
  const { title, description, section } = props

  return (
    <Content className={section}>
      <Title desc={description}>{title}</Title>
      {description && <Desc>{description}</Desc>}
    </Content>
  )
}

const Content = styled.div`
  background-color: rgba(9, 53, 123, 0.9);
  padding: var(--space4);
  padding-bottom: var(--space3);
  border-bottom: 3px solid var(--color-primary);
  height: 155px;

  &.news,
  &.world {
    border-color: var(--color-news);
  }
  &.sport {
    border-color: var(--color-sport);
  }
  &.culture {
    border-color: var(--color-culture);
  }
  &.lifeandstyle {
    border-color: var(--color-lifeandstyle);
  }
`

type TitleProps = {
  desc?: string
}

const Title = styled.h2`
  font-weight: 700;
  font-size: 20px;
  color: #fff;
  display: -webkit-box;
  -webkit-line-clamp: ${(props: TitleProps) => (!!props.desc ? 2 : 4)};
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.5;
`

const Desc = styled.p`
  color: #fff;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.3;
  margin-top: var(--space3);
`

export default NewsContent
