import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ForgotPassword from './'
import { BrowserRouter } from 'react-router-dom'

describe('ForgotPassword component', () => {
  test('renders the email input field', () => {
    render(
      <BrowserRouter>
        <ForgotPassword />
      </BrowserRouter>
    )

    const emailInput = screen.getByPlaceholderText('abc@gmail.com') as HTMLInputElement
    expect(emailInput).toBeInTheDocument()
  })

  test('updates the email state on input change', () => {
    render(
      <BrowserRouter>
        <ForgotPassword />
      </BrowserRouter>
    )

    const emailInput = screen.getByPlaceholderText('abc@gmail.com') as HTMLInputElement
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })

    expect(emailInput.value).toBe('test@example.com')
  })
  test('navigates to the candidates page on reset password button click', () => {
    render(
      <BrowserRouter>
        <ForgotPassword />
      </BrowserRouter>
    )

    const emailInput = screen.getByPlaceholderText('abc@gmail.com') as HTMLInputElement
    const resetPasswordButton = screen.getByRole('button', {
      name: 'Reset Password'
    })
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.click(resetPasswordButton)
  })
  test('updates the email state on input change', () => {
    render(
      <BrowserRouter>
        <ForgotPassword />
      </BrowserRouter>
    )

    const emailInput = screen.getByRole('button', {
      name: /go back/i
    })
    fireEvent.click(emailInput)
  })
})
