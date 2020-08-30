import React, { useRef, useCallback, useState } from 'react'
import styled from '@emotion/styled'
import { debounce } from 'lodash'

import { useOnClickOutside } from '@/lib/hooks'
import { Icon } from '@/components/uikit'

interface SearchInputProps {
  onChange: (q: string) => void
}

function SearchInput(props: SearchInputProps) {
  const { onChange } = props
  const [isExpanded, setExpanded] = useState(false)
  const ref = useRef()

  const delayedQuery = useCallback(
    debounce((q) => onChange(q), 300),
    [],
  )

  const onChangeInput = (e) => {
    delayedQuery(e.target.value)
  }

  useOnClickOutside(ref, () => {
    if (isExpanded) {
      setExpanded(false)
    }
  })

  return (
    <Wrapper isExpanded={isExpanded} ref={ref}>
      <Control>
        <SearchButton onClick={() => setExpanded(true)}>
          <SearchIcon />
        </SearchButton>
        {isExpanded && (
          <InputBox>
            <Input
              placeholder="Search all news"
              autoFocus
              onChange={onChangeInput}
            />
          </InputBox>
        )}
      </Control>
    </Wrapper>
  )
}

const SearchIcon = () => {
  return (
    <Icon
      iconSize={20}
      iconFill="#ffffff"
      name="SearchIcon"
      iconPath="M22.1,20.28,16.89,15h-1l-.35-.33a8,8,0,1,0-.86.86l.33.34v1l5.23,5.23a1.3,1.3,0,0,0,1.83,0A1.29,1.29,0,0,0,22.1,20.28ZM9.51,15A5.54,5.54,0,1,1,15,9.51,5.52,5.52,0,0,1,9.51,15Z"
    />
  )
}

export const InputBox = styled.div(() => ({
  color: '#fff',
  width: '100%',
}))

export const SearchButton = styled.div(() => ({
  flex: '0 0 50px',
  padding: 'var(--space3)',
  cursor: 'pointer',
  userSelect: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const Wrapper = styled.div(
  ({ isExpanded }: { isExpanded: boolean }) => ({
    borderBottom: '3px solid #fff',
    display: 'inline-flex',
    alignItems: 'center',
    width: '100%',
    transition: 'width 0.2s ease-in-out',

    ...(isExpanded && {
      backgroundColor: 'var(--color-primary-light)',
    }),
    ...(!isExpanded && {
      width: '50px',
    }),
  }),
)

export const Control = styled.div`
  display: flex;
  width: 100%;
`

export const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 16px;
  padding: var(--space2);
  height: 100%;
  width: 100%;

  &::placeholder {
    color: #74819c;
  }
`

export default SearchInput
