import { fireEvent, render } from '@testing-library/react'
import PreviewNoticeModal from '.'
import React from 'react'

describe('testing preview notice modal component', () => {
  const onClose = jest.fn()
  const onSubmit = jest.fn()
  test('should renders correctly', () => {
    const { getByText } = render(
      <PreviewNoticeModal isOpen={true} onClose={onClose} onSubmit={onSubmit} />
    )
    expect(getByText('Pre-Adverse Action Notice')).toBeInTheDocument()
  })

  test('submit button should be clicked one time', () => {
    const { getByText } = render(
      <PreviewNoticeModal isOpen={true} onClose={onClose} onSubmit={onSubmit} />
    )
    const submitButton = getByText('Submit Notice')
    fireEvent.click(submitButton)
    expect(onSubmit).toHaveBeenCalledTimes(1)
  })
})
