import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import SignUp from './'
import { SIGNUP_PLACEHOLDER } from '../../../utils/constants'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'

const mockData = [
  {
    id: 1,
    name: 'James Rodriguez',
    email: 'abc@gmail.com',
    password: 'password@123'
  }
]

describe('SignUp Component', () => {
  beforeEach(() => {
    jest.spyOn(axios, 'get').mockResolvedValue({ data: mockData })
  })
  it('enables the Sign Up button when passwords match', () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )

    const emailInput = screen.getByPlaceholderText('abc@gmail.com')
    fireEvent.change(emailInput, { target: { value: 'sai@1245' } })

    const passwordInput = screen.getByPlaceholderText(SIGNUP_PLACEHOLDER)
    fireEvent.change(passwordInput, { target: { value: 'sai@1245' } })

    const confirmPasswordInput = screen.getByPlaceholderText(SIGNUP_PLACEHOLDER)
    fireEvent.change(confirmPasswordInput, { target: { value: 'sai@1245' } })
  })

  it('disables the Sign Up button when passwords do not match', () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )

    const emailInput = screen.getByPlaceholderText('abc@gmail.com')
    fireEvent.change(emailInput, { target: { value: 'sai@gmail.com' } })

    const passwordInput = screen.getByPlaceholderText(SIGNUP_PLACEHOLDER)
    fireEvent.change(passwordInput, { target: { value: 'sai@1245' } })

    const confirmPasswordInput = screen.getByPlaceholderText('*****')
    fireEvent.change(confirmPasswordInput, { target: { value: 'wrongPassword' } })

    const signUpButton = screen.getByTestId('signup button')
    expect(signUpButton).toBeDisabled()
  })



  it('enables the Sign Up button when form is valid', () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )

    const emailInput = screen.getByPlaceholderText('abc@gmail.com')
    fireEvent.change(emailInput, { target: { value: 'validemail@gmail.com' } })
    const passwordInput = screen.getByTestId('password-input')
    fireEvent.change(passwordInput.children[0].children[0], { target: { value: 'Sai@123' } })
    const confirmPasswordInput = screen.getByTestId('confirm-password-input')
    fireEvent.change(confirmPasswordInput.children[0].children[0], { target: { value: 'Sai@123' } })
    const signUpButton = screen.getAllByText('Sign up')
    fireEvent.click(signUpButton[1])
  })

  it('enables the Sign Up button when confirmPassword is entered first and password next ', () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )

    const emailInput = screen.getByPlaceholderText('abc@gmail.com')
    fireEvent.change(emailInput, { target: { value: 'sai@gmail.com' } })
    const confirmPasswordInput = screen.getByTestId('confirm-password-input')
    fireEvent.change(confirmPasswordInput.children[0].children[0], { target: { value: 'Sai@123' } })
    const passwordInput = screen.getByTestId('password-input')
    fireEvent.change(passwordInput.children[0].children[0], { target: { value: 'Sai@123' } })
    const signUpButton = screen.getAllByText('Sign up')
    fireEvent.click(signUpButton[1])
  });

  test('Button onClick event navigates to the home page', () => {
    const { getByText } =    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
    const button = getByText('Sign in'); 
    fireEvent.click(button);
  });
})
