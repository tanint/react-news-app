import React, { Fragment } from 'react'
import type { AppProps } from 'next/app'
import { ReactQueryDevtools } from 'react-query-devtools'

import { ErrorProvider } from '@/lib/error'
import { ThemeProvider } from '@/styles/ThemeProvider'

function MyApp(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <Fragment>
      <ThemeProvider>
        <ErrorProvider>
          <Component {...pageProps} />
        </ErrorProvider>
      </ThemeProvider>
      <ReactQueryDevtools />
    </Fragment>
  )
}

export default MyApp
