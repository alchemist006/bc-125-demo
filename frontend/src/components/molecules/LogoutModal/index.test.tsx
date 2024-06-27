import { fireEvent, render } from '@testing-library/react'
import LogoutModal from '.'
import React from 'react'

describe('testing Logout Modal component', () => {
  const onCancelClick = jest.fn()
  const onLogoutClick = jest.fn()
  test('should renders correctly', () => {
    const { getByText } = render(
      <LogoutModal isOpen={true} onCancelClick={onCancelClick} onLogoutClick={onLogoutClick} />
    )
    getByText('Confirm Logout')
    const cancelButtonElement = getByText('Cancel')
    const LogoutButtonElement = getByText('Logout')
    fireEvent.click(cancelButtonElement)
    expect(onCancelClick).toHaveBeenCalledTimes(1)
    fireEvent.click(LogoutButtonElement)
    expect(onLogoutClick).toHaveBeenCalledTimes(1)
  })
})
