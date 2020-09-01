import React, { useEffect, useRef, useCallback, useState } from 'react'
import { debounce } from 'lodash'

import { useOnClickOutside } from '@/lib/hooks'

import {
  Wrapper,
  Control,
  SearchButton,
  SearchIcon,
  Input,
  InputBox,
} from './styled'
interface SearchInputProps {
  onChange: (q: string) => void
  isOpen?: boolean
}

const SearchInput = (props: SearchInputProps) => {
  const { onChange, isOpen = false } = props
  const [isExpanded, setExpanded] = useState(isOpen)

  const $wrapperRef = useRef()

  const delayedQuery = useCallback(
    debounce((q) => {
      onChange(q)
    }, 300),
    [],
  )

  const onChangeInput = (e) => {
    delayedQuery(e.target.value)
  }

  useOnClickOutside($wrapperRef, () => {
    if (isOpen) return

    if (isExpanded) {
      setExpanded(false)
    }
  })

  useEffect(() => {
    setExpanded(isOpen)
  }, [isOpen])

  return (
    <Wrapper isExpanded={isExpanded} ref={$wrapperRef}>
      <Control>
        <SearchButton onClick={() => setExpanded(true)}>
          <SearchIcon />
        </SearchButton>
        {isExpanded && (
          <InputBox>
            <Input
              placeholder="Search all news"
              onChange={onChangeInput}
              autoFocus
            />
          </InputBox>
        )}
      </Control>
    </Wrapper>
  )
}

export default SearchInput
