import React, { Fragment } from 'react'

import { render, screen } from '@/tests/test-utils'
import buildTags from './buildTags'

describe('Build SEO Tags', () => {
  it('should render correctly', () => {
    const SEO = {
      title: 'Test SEO Tag',
    }

    render(<Fragment>{React.Children.toArray(buildTags(SEO))}</Fragment>)

    const title = screen.getByText('Test SEO Tag')

    expect(title).toBeDefined()
  })
})
