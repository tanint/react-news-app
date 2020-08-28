import React from 'react'
import styled from '@emotion/styled'

export const Text = styled(({ as: Tag = 'p', ...props }) => {
  return <Tag {...props} />
})

export const Container = styled.div`
  max-width: var(--width-container);
  margin: 0 auto;
  padding: 0 var(--space5);
`
