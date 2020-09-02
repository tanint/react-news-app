import React from 'react'

import { CircularProgress } from '@/components/CircularProgress'

function Loading() {
  return (
    <div
      css={{
        width: '100%',
        minHeight: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </div>
  )
}

export default Loading
