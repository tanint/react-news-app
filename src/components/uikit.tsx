import React from 'react'
import styled from '@emotion/styled'

export const Text = styled(({ as: Tag = 'p', ...props }) => {
  return <Tag {...props} />
})
