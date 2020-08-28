import React from 'react'
import styled from '@emotion/styled'

import { BookmarkOffIcon, BookmarkIcon } from './BookmarkIcon'
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

const BookmarkStyled = styled.div`
  background-color: var(--color-primary);
  border-radius: 5px;
  color: #fff;
  text-transform: uppercase;
  border: none;
  appearance: none;
  padding: var(--space3);
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary-light);
  }
`

export default BookmarkButton
