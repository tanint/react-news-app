import { css } from '@emotion/core'

export default css`
  :root {
    --space-unit: 1rem;

    --space1: calc(0.25 * var(--space-unit));
    --space2: calc(0.5 * var(--space-unit));
    --space3: calc(0.75 * var(--space-unit));
    --space4: calc(1 * var(--space-unit));
    --space5: calc(1.25 * var(--space-unit));
    --space6: calc(1.5 * var(--space-unit));
    --space8: calc(2 * var(--space-unit));
    --space10: calc(2.5 * var(--space-unit));

    --width-container: 1150px;
  }
`
