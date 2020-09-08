import { get } from 'lodash'
import { useEffect, useState } from 'react'

export const BOOKMARK_STORAGE_KEY = 'thepeak_bookmarks'

export const useLocalBookmarks = () => {
  const [bookmarks, setBookmark] = useState([])

  const addBookmark = (newData) => {
    setBookmark([newData, ...bookmarks])
  }

  const removeBookmark = (id) => {
    setBookmark(bookmarks.filter((bookmark) => bookmark.id !== id))
  }

  // Set Initial bookmarks
  useEffect(() => {
    const localBookmarks = JSON.parse(
      localStorage.getItem(BOOKMARK_STORAGE_KEY),
    )

    const initialBookmarked = get(localBookmarks, 'bookmarks', [])

    setBookmark(initialBookmarked)
  }, [])

  useEffect(() => {
    const data = { bookmarks }

    localStorage.setItem(BOOKMARK_STORAGE_KEY, JSON.stringify(data))
  }, [bookmarks])

  return {
    bookmarks,
    addBookmark,
    removeBookmark,
  }
}
