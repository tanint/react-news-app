import React from 'react'
import styled from '@emotion/styled'

import { BookmarkIcon } from './BookmarkIcon'
interface BookmarkButtonProps {
  text?: string
  onClick?: () => void
}

function BookmarkButton(props: BookmarkButtonProps) {
  const { text = 'View Bookmark', onClick } = props

  return (
    <BookmarkStyled onClick={onClick}>
      <BookmarkIcon />
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
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary-light);
  }
`

export default BookmarkButton
