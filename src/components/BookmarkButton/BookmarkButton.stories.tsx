import React from 'react'

import BookmarkButton from './BookmarkButton'

export const Overview = () => {
  return (
    <div css={{ display: 'grid', gap: '10px' }}>
      <div>
        <BookmarkButton />
      </div>
      <div>
        <BookmarkButton isActive />
      </div>
      <div>
        <BookmarkButton text="Custom Text" />
      </div>
    </div>
  )
}

export default {
  title: 'BookmarkButton',
}
