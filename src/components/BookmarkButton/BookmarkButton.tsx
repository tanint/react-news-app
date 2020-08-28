import React from 'react'

import styled from '@emotion/styled'

import { Icon } from '@/components/uikit'

interface BookmarkButtonProps {
  text?: string
  isActive?: boolean
}

function BookmarkButton(props: BookmarkButtonProps) {
  const { text = 'View Bookmark', isActive = false } = props

  return (
    <BookmarkStyled>
      {isActive ? <BookmarkOffIcon /> : <BookmarkIcon />}
      <span css={{ marginLeft: 'var(--space2)' }}>{text}</span>
    </BookmarkStyled>
  )
}

export const BookmarkIcon = () => {
  return (
    <Icon
      iconSize={16}
      name="BookmarkIcon"
      iconPath="M18,1.14H6A2.44,2.44,0,0,0,3.55,3.55V22.86L12,19.24l8.45,3.62V3.55A2.44,2.44,0,0,0,18,1.14Z"
    />
  )
}

export const BookmarkOffIcon = () => {
  return (
    <Icon
      iconSize={16}
      name="BookmarkOffIcon"
      iconPath="M18,1.14H6A2.42,2.42,0,0,0,3.54,3.55V22.86L12,19.24l8.44,3.62V3.55A2.42,2.42,0,0,0,18,1.14Zm0,18.1-6-2.63L6,19.24V4.76A1.22,1.22,0,0,1,7.16,3.55h9.65A1.21,1.21,0,0,1,18,4.76Z"
    />
  )
}

const BookmarkStyled = styled.div`
  background-color: var(--color-primary);
  border-radius: 5px;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  appearance: none;
  padding: var(--space3);
  font-size: 14px;
  display: inline-flex;
  align-items: center;

  &:hover {
    background-color: var(--color-primary-light);
  }
`

export default BookmarkButton
