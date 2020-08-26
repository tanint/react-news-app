import React, { ReactNode } from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'

import GlobalStyles from './GlobalStyles'
import theme from './theme'

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  return (
    <EmotionThemeProvider theme={theme}>
      <GlobalStyles />
      {props.children}
    </EmotionThemeProvider>
  )
}
