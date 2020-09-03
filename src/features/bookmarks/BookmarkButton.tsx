import React from 'react'
import { find } from 'lodash'

import { BookmarkButton } from '@/components/BookmarkButton'
import { useLocalBookmarks } from './useBookmarks'

interface BookmarkButtonContainerProps {
  article: {
    id: string
    title: string
    thumbnail: string
    section: string
  }
}

function BookmarkButtonContainer(props: BookmarkButtonContainerProps) {
  const { article } = props

  const { bookmarks, removeBookmark, addBookmark } = useLocalBookmarks()
  const isBookmarked = find(bookmarks, (b) => b.id === article.id)

  const onClickBookmark = () => {
    if (isBookmarked) {
      return removeBookmark(article.id)
    }

    return addBookmark({
      id: article.id,
      title: article.title,
      thumbnail: article.thumbnail,
      section: article.section,
    })
  }

  return (
    <BookmarkButton
      onClick={onClickBookmark}
      text={`${isBookmarked ? 'Remove' : 'Add'} Bookmark`}
    />
  )
}

export default BookmarkButtonContainer
