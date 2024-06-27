import React from 'react'
import { render } from '@testing-library/react'
import SignInPage from './'
import { BrowserRouter } from 'react-router-dom'

describe('signupage', () => {
  test('should render the signInPage without any errors', () => {
    const { container } = render(
      <BrowserRouter>
        <SignInPage />
      </BrowserRouter>
    )
    expect(container).toBeInTheDocument()
  })
})
