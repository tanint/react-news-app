import React from 'react'
import type { AppProps } from 'next/app'
import { ReactQueryDevtools } from 'react-query-devtools'
import { ReactQueryConfigProvider } from 'react-query'

import { ErrorProvider } from '@/lib/error'
import { ThemeProvider } from '@/styles/ThemeProvider'
import { MainLayout } from '@/components/Layouts'

const queryConfig = {
  queries: {
    refetchOnWindowFocus: false,
    cacheTime: 1 * 60 * 1000,
  },
}

function MyApp(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <ThemeProvider>
        <ErrorProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ErrorProvider>
      </ThemeProvider>
      <ReactQueryDevtools />
    </ReactQueryConfigProvider>
  )
}

export default MyApp
