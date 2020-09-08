import React from 'react'
import styled from '@emotion/styled'

import SearchInput from './SearchInput'

export const Overview = () => {
  return <SearchInput onChange={(q) => console.log('qqqq', q)} />
}

export const isOpen = () => {
  return <SearchInput onChange={(q) => console.log('qqqq', q)} isOpen />
}

export default {
  title: 'Search Input',
  decorators: [(story) => <DecoBox>{story()}</DecoBox>],
}

const DecoBox = styled.div`
  background-color: #09357b;
  padding: 40px;
  max-width: 700px;
`
