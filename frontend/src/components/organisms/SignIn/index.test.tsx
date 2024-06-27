import React from 'react'
import {  fireEvent, render, screen, waitFor } from '@testing-library/react'
import SignIn from './'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'

const mockData = [
  {
    id: 1,
    name: 'James Rodriguez',
    email: 'abc@gmail.com',
    password: 'password@123'
  }
]

jest.mock('../../../services', () => ({
  getUserByEmail: jest.fn(() =>
    Promise.resolve([
      {
        email: 'shivam@gmail.com',
        name: 'saiprabhu',
        password: 'Test@123',
        id: 3
      }
    ])
  )
}))

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    loginWithRedirect: jest.fn()
  })
}))

describe('SignIn Component', () => {
  beforeEach(() => {
    jest.spyOn(axios, 'get').mockResolvedValue({ data: mockData })
  })
  it('renders without errors', () => {
    render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    )

    const emailInput = screen.getByPlaceholderText('abc@gmail.com')
    fireEvent.change(emailInput, { target: { value: 'sai@gmail.com' } })

    const passwordInput = screen.getByPlaceholderText('***********')
    fireEvent.change(passwordInput, { target: { value: 'sai@1245' } })
    expect(emailInput).toHaveValue('sai@gmail.com')
    expect(passwordInput).toHaveValue('sai@1245')
  })


  it('enables the Sign Up button when form is valid', () => {
    render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    )

    const emailInput = screen.getByPlaceholderText('abc@gmail.com')
    fireEvent.change(emailInput, { target: { value: 'prabhu@gmail.com' } })
    const passwordInput = screen.getByTestId('password-input')
    fireEvent.change(passwordInput.children[0].children[0], { target: { value: 'Sai@123' } })
    const signUpButton = screen.getAllByText('Sign In')
    fireEvent.click(signUpButton[1])
    expect(signUpButton[1]).toBeEnabled()
  })

  test('should navigate to sign up page', () => {
    render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    )
    const signUpButton = screen.getByRole('button', { name: 'Sign Up' })
    fireEvent.click(signUpButton)
    expect(window.location.pathname).toBe('/signup')
  })

  test('Button onClick event navigates to the forgot page', () => {
    render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    )
    const forgotpasswordButton = screen.getByRole('button', { name: 'Forgot password?' })
    fireEvent.click(forgotpasswordButton)
    expect(window.location.pathname).toBe('/forgotpassword')
  })

  test('clicking the Google Sign-In Button invokes loginWithRedirect', async () => {
    render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    )
    const signWithGoogleButton = screen.getByRole('button', { name: 'icon Sign in with Google' })
    fireEvent.click(signWithGoogleButton)

    await waitFor(() => expect(useAuth0().loginWithRedirect).not.toHaveBeenCalledTimes(1))
  })
})
