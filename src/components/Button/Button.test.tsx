import React from 'react'
import { render, screen } from '@/tests/test-utils'
import { Button } from './Button'

describe('Button', () => {
  it('should render correctly', () => {
    render(<Button>Test</Button>)

    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
