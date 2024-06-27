import { fireEvent, render } from '@testing-library/react'
import PreAdverseNoticeCard from '.'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

describe('testing pre adverse notice card component', () => {
  const onSubmit = jest.fn()
  test('should render correctly', () => {
    render(
      <BrowserRouter>
        <PreAdverseNoticeCard onSubmit={onSubmit} />
      </BrowserRouter>
    )
  })

  test('submit button should be enabled when clicked on assault domestic violence checkbox', () => {
    const { getByText } = render(
      <BrowserRouter>
        <PreAdverseNoticeCard onSubmit={onSubmit} />
      </BrowserRouter>
    )
    const checkboxElement = getByText('Assault Domestic Violence')
    const submitButton = getByText('Preview Notice')
    expect(submitButton).toBeDisabled()
    fireEvent.click(checkboxElement)
    expect(submitButton).toBeEnabled()

    fireEvent.click(submitButton)
    expect(getByText('Pre-Adverse Action Notice')).toBeInTheDocument()

    const submitAgainButton = getByText('Submit Notice')
    fireEvent.click(submitAgainButton)
  })

  test('should close preview notice modal when click on the close button', () => {
    const { getByText, getAllByTestId, queryAllByText } = render(
      <BrowserRouter>
        <PreAdverseNoticeCard onSubmit={onSubmit} />
      </BrowserRouter>
    )
    const checkboxElement = getByText('Assault Domestic Violence')
    const submitButton = getByText('Preview Notice')
    expect(submitButton).toBeDisabled()
    fireEvent.click(checkboxElement)
    expect(submitButton).toBeEnabled()

    fireEvent.click(submitButton)
    expect(getByText('Pre-Adverse Action Notice')).toBeInTheDocument()

    const closeButton = getAllByTestId('iconComponent')[0]
    fireEvent.click(closeButton)
    expect(queryAllByText('Dear John Smith,')[0]).toBeInTheDocument()
  })
})
