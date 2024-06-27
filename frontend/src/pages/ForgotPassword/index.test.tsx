import { fireEvent, render, waitFor } from '@testing-library/react'
import ForgotPasswordPage from '.'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

describe('testing forgot page component', () => {
  test('should renders correctly in default state', () => {
    const { getByText } = render(
      <BrowserRouter>
        <ForgotPasswordPage />
      </BrowserRouter>
    )
    getByText('Forgot Password?')
  })

  test('Reset password should enabled after we input valid email id', async () => {
    const { getByRole, getByText, queryByText } = render(
      <BrowserRouter>
        <ForgotPasswordPage />
      </BrowserRouter>
    )
    const inputFieldElement = getByRole('textbox')
    const buttonElement = getByRole('button', { name: 'Reset Password' })
    expect(buttonElement).toBeDisabled()

    fireEvent.change(inputFieldElement, { target: { value: 'test@gmail.com' } })
    expect(buttonElement).toBeEnabled()

    fireEvent.click(buttonElement)
    getByText('"OTP has been sent to your email!"')

    await new Promise((resolve) => setTimeout(resolve, 5000))

    await waitFor(
      () => {
        const elementAfterDelay = queryByText('"OTP has been sent to your email!"')
        expect(elementAfterDelay).toBeNull()
        expect(getByText('Please enter OTP')).toBeInTheDocument()
      },
      { timeout: 6000 }
    )
  }, 100000)
})
