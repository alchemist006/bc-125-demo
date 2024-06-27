import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Otpcard from './'

jest.useFakeTimers()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}))

jest.mock('mui-one-time-password-input', () => ({
  MuiOtpInput: jest.fn().mockReturnValue(<input />)
}))

describe('OtpCard', () => {
  test('should render the component correctly', () => {
    const text = 'OTP has been sent to your mail'
    render(<Otpcard />)
    const textElement = screen.getByText(text)
    expect(textElement).toBeInTheDocument()
  })

  test('should clear OTP when Resend OTP button is clicked', async () => {
    render(<Otpcard />)
    const resendButton = screen.getByText('Resend OTP')
    fireEvent.click(resendButton)
    jest.runAllTimers()
    const otpInput = screen.getByRole('textbox')
    expect(otpInput).toBeInTheDocument()
  })
})
