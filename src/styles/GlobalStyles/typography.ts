import { css } from '@emotion/core'

export default css`
  :root {
    --text-base-size: 1em;
    --font-primary: sans-serif;
    --font-color: #222;

    --body-line-height: 1.4;
    --heading-line-height: 1.2;
  }

  body {
    font-size: var(--text-base-size);
    font-family: var(--font-primary);
    color: var(--font-color);
  }

  h1,
  h2,
  h3,
  h4 {
    color: var(--font-color);
    line-height: var(--heading-line-height);
    font-weight: 400;
    margin: 0;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;

    &:hover {
      color: var(--color-primary-dark);
      text-decoration: underline;
    }
  }

  mark {
    color: inherit;
  }

  strong {
    font-weight: 700;
  }

  s {
    text-decoration: line-through;
  }

  u {
    text-decoration: underline;
  }
`
