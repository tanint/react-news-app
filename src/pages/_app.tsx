import React from 'react'
import type { AppProps } from 'next/app'
import { ReactQueryDevtools } from 'react-query-devtools'
import { ReactQueryConfigProvider } from 'react-query'

import { ErrorProvider } from '@/lib/error'
import { ThemeProvider } from '@/styles/ThemeProvider'

const queryConfig = {
  queries: {
    refetchOnWindowFocus: false,
  },
}

function MyApp(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <ThemeProvider>
        <ErrorProvider>
          <Component {...pageProps} />
        </ErrorProvider>
      </ThemeProvider>
      <ReactQueryDevtools />
    </ReactQueryConfigProvider>
  )
}

export default MyApp
