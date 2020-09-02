import React, { useEffect, useRef, useState } from 'react'

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
  value?: string
}

const SearchInput = (props: SearchInputProps) => {
  const { value, onChange, isOpen = false } = props
  const [isExpanded, setExpanded] = useState(isOpen)

  const $wrapperRef = useRef()

  const onChangeInput = (e) => {
    onChange(e.target.value)
  }

  useOnClickOutside($wrapperRef, () => {
    if (value) return

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
              value={value}
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
