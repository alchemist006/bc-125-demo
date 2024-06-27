import { fireEvent, render } from '@testing-library/react'
import FilterPopup from '.'
import React from 'react'

describe('testing filter popup component', () => {
  const onCheck = jest.fn()

  test('should render correctly', () => {
    render(<FilterPopup type={'CANDIDATE_POPUP'} onCheck={onCheck} />)
  })

  test('should return the label if check or uncheck', () => {
    const { getByText } = render(<FilterPopup type={'CANDIDATE_POPUP'} onCheck={onCheck} />)
    const checkboxElement = getByText('All Status')
    fireEvent.click(checkboxElement)
    expect(onCheck).toBeCalledWith('All Status')
  })

  test('first checkbox is default checked in ADVERSE_ACTION_POPUP', () => {
    const { getAllByRole } = render(<FilterPopup type={'ADVERSE_ACTION_POPUP'} onCheck={onCheck} />)
    const checkboxElement = getAllByRole('checkbox')[0]
    expect(checkboxElement).toBeChecked()
  })
})
