import { fireEvent, render, screen } from '@testing-library/react'
import SideBar from '.'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
describe('testing SideBar component', () => {
  const onNavClick = jest.fn()
  const onLogoutClick = jest.fn()

  test('should renders correctly', () => {
    render(
      <BrowserRouter>
        <SideBar onNavClick={onNavClick} onLogoutClick={onLogoutClick} />
      </BrowserRouter>
    )
  })

  test('should display logout modal when logout button clicked', () => {
    const { getByText } = render(
      <BrowserRouter>
        <SideBar onNavClick={onNavClick} onLogoutClick={onLogoutClick} />
      </BrowserRouter>
    )
    const logoutButtonElement = getByText('James Rodriguez')
    fireEvent.click(logoutButtonElement)
    expect('Confirm Logout').toBeInTheDocument

    const cancelElementButton = getByText('Cancel')
    fireEvent.click(cancelElementButton)
    expect('James Rodriguez').toBeInTheDocument
  })

  test('should display the sideNav when cancel button is clicked on logout modal', () => {
    const { getByText } = render(
      <BrowserRouter>
        <SideBar onNavClick={onNavClick} onLogoutClick={onLogoutClick} />
      </BrowserRouter>
    )
    const logoutButtonElement = getByText('James Rodriguez')
    fireEvent.click(logoutButtonElement)
    expect('Confirm Logout').toBeInTheDocument

    const cancelElementButton = getByText('Cancel')
    fireEvent.click(cancelElementButton)
    expect('James Rodriguez').toBeInTheDocument
  })

  test('should navigate to candidates when click on candidate button', () => {
    const { getByText } = render(
      <BrowserRouter>
        <SideBar onNavClick={onNavClick} onLogoutClick={onLogoutClick} />
      </BrowserRouter>
    )
    const candidateButtonElement = getByText('Candidates')
    fireEvent.click(candidateButtonElement)
    expect(window.location.pathname).toBe('/candidates')
  })

  test('should navigate to adverse-action when click on candidate button', () => {
    const { getByText } = render(
      <BrowserRouter>
        <SideBar onNavClick={onNavClick} onLogoutClick={onLogoutClick} />
      </BrowserRouter>
    )
    const candidateButtonElement = getByText('Adverse Actions')
    fireEvent.click(candidateButtonElement)
    expect(window.location.pathname).toBe('/adverse-actions')
  })
})

it('should navigate to Signup page when localStorage is set to isLogin', () => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(() => 'true'),
      removeItem: jest.fn()
    },
    configurable: true
  })

  const logoutMock = jest.fn()

  render(
    <BrowserRouter>
      <SideBar onLogoutClick={logoutMock} />
    </BrowserRouter>
  )

  const logoutButton = screen.getByText('James Rodriguez')
  fireEvent.click(logoutButton)

  const buttons = screen.getAllByRole('button')
  const confirmLogoutButton = buttons[1]
  fireEvent.click(confirmLogoutButton)
  expect(window.location.pathname).toBe('/signup')
  expect(localStorage.removeItem).toHaveBeenCalledWith('isLogin')
})
