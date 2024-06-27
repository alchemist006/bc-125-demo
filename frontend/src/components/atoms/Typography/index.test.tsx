import { render } from '@testing-library/react'
import Typography from '.'
import React from 'react'

describe('testing typography component', () => {
  test('should render correctly', () => {
    const { getByText } = render(<Typography text="Sign up" variant="h1" />)
    getByText('Sign up')
  })
})
