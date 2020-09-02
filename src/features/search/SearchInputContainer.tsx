import React, { useEffect, useCallback } from 'react'
import { debounce } from 'lodash'
import { useRouter } from 'next/router'

import { SearchInput } from '@/components/SearchInput'

const SearchContainer = () => {
  const router = useRouter()
  const [keyword, setKeyword] = React.useState('')

  const delayRouteToSearch = useCallback(
    debounce((href) => {
      router.replace(href)
    }, 500),
    [],
  )

  useEffect(() => {
    if (router.route !== '/search') {
      setKeyword('')
    }
  }, [router.route])

  const isOpenInput = !!keyword || router.route === '/search'

  return (
    <SearchInput
      isOpen={isOpenInput}
      value={keyword}
      onChange={(q) => {
        const href = ['/search', ...(q && [`?q=${q}`])].join('')

        setKeyword(q)
        delayRouteToSearch(href)
      }}
    />
  )
}

export default SearchContainer
