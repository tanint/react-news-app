import React, { ReactNode } from 'react'
import { render } from '@testing-library/react'

import { ThemeProvider } from '@/styles/ThemeProvider'

const Providers = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
