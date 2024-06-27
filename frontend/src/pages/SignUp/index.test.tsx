import React from 'react'
import { render } from '@testing-library/react'
import SignUpPage from '.'
import { BrowserRouter } from 'react-router-dom'

describe('signupage', () => {
  test('should render the signuppage without any errors', () => {
    const { container } = render(
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>
    )
    expect(container).toBeInTheDocument()
  })
})
