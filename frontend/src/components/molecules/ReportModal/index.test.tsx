import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import ReportModal from '.'
import { REPORT_MODAL_BUTTON_LABEL } from '../../../utils/constants'

describe('testing report modal component', () => {
  const onClick = jest.fn()
  test('should render correctly', () => {
    render(<ReportModal isOpen={true} onClick={onClick} />)
  })

  test('export report button should be enabled when both dates selected', () => {
    const { getByText, getAllByTestId, getByRole, getAllByRole } = render(
      <ReportModal isOpen={true} onClick={onClick} />
    )
    const exportButton = getByText(REPORT_MODAL_BUTTON_LABEL)
    expect(exportButton).toBeDisabled()

    const calendarButton1 = getAllByTestId('CalendarIcon')[0]
    fireEvent.click(calendarButton1)
    fireEvent.click(getByRole('gridcell', { name: '11' }))

    const calendarButton2 = getAllByTestId('CalendarIcon')[1]
    fireEvent.click(calendarButton2)
    fireEvent.click(getAllByRole('gridcell', { name: '17' })[1])

    expect(exportButton).toBeEnabled()
  });
})
