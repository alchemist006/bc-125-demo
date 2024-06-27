import { fireEvent, render } from '@testing-library/react'
import PreAdverseActionPage from '.'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}))

describe('testing pre adverse action notice', () => {
  test('should renders correctly', () => {
    const { getByText, getAllByTestId } = render(
      <BrowserRouter>
        <PreAdverseActionPage />
      </BrowserRouter>
    )
    getByText('Pre-Adverse Action Notice')
    const backIcon = getAllByTestId('iconComponent')[9]
    fireEvent.click(backIcon)
    expect(mockedUsedNavigate).toHaveBeenCalledWith(-1)
  })
})
