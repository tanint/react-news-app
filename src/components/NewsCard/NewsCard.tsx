import React from 'react'
import styled from '@emotion/styled'

import NewsContent from './NewsContent'
import { NewsCardProps } from './types'

function NewsCard(props: NewsCardProps) {
  const { title, description, thumbnail, section, ratio = 1 } = props

  return (
    <RatioBox ratio={ratio}>
      <RatioBoxFloating>
        {thumbnail ? (
          <Image src={thumbnail} />
        ) : (
          <Image src="/images/default-thumbnail.jpg" />
        )}
      </RatioBoxFloating>
      <FloatingContent>
        <NewsContent
          title={title}
          description={description}
          section={section}
        />
      </FloatingContent>
    </RatioBox>
  )
}

type RatioBoxType = { ratio: number }

const RatioBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: ${({ ratio }: RatioBoxType) => `${ratio * 100}%`};
`

const RatioBoxFloating = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
`

const FloatingContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default NewsCard
