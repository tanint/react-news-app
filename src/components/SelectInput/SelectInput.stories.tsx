import React from 'react'
import styled from '@emotion/styled'

import SelectInput from './SelectInput'

export default {
  title: 'SelectInput',
  decorators: [(story) => <DecoBox>{story()}</DecoBox>],
}

export const Overview = () => {
  return (
    <SelectInput
      isOpen
      options={mockOptions}
      initialValue="newest"
      onChange={(value) => {
        console.log(value)
      }}
    />
  )
}

const mockOptions = [
  {
    label: 'Newest First',
    value: 'newest',
  },
  {
    label: 'Oldest First',
    value: 'oldest',
  },
]

const DecoBox = styled.div`
  max-width: 400px;
`
