import React from 'react'
import { css, Global } from '@emotion/core'

import reset from './reset'
import typography from './typography'
import colors from './colors'
import spacing from './spacing'

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        ${reset}
        ${typography}
        ${colors}
        ${spacing}

        .container {
          max-width: var(--width-container);
          margin: 0 auto;
        }

        body,
        #__next {
          min-height: 100vh;
        }
      `}
    />
  )
}
