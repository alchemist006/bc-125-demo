import { fireEvent, render, waitFor } from '@testing-library/react'
import PageHeader from '.'
import React from 'react'
import { REPORT_MODAL_BUTTON_LABEL } from '../../../utils/constants'
import { BrowserRouter } from 'react-router-dom'

const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}))
describe('testing page header component', () => {
  test('should renders correctly', () => {
    render(
      <BrowserRouter>
        <PageHeader type={'CANDIDATES'} />
      </BrowserRouter>
    )
  })

  test('should open date picker modal when clicked on export button', async () => {
    const { getByText, getAllByTestId, getByRole, getAllByRole, queryByText } = render(
      <BrowserRouter>
        <PageHeader type={'CANDIDATES'} />
      </BrowserRouter>
    )
    fireEvent.click(getByText('Export'))
    getByText('Export Candidate Reports CSV')

    const exportButton = getByText(REPORT_MODAL_BUTTON_LABEL)
    expect(exportButton).toBeDisabled()

    const calendarButton1 = getAllByTestId('CalendarIcon')[0]
    fireEvent.click(calendarButton1)
    fireEvent.click(getByRole('gridcell', { name: '11' }))

    const calendarButton2 = getAllByTestId('CalendarIcon')[1]
    fireEvent.click(calendarButton2)
    fireEvent.click(getAllByRole('gridcell', { name: '17' })[1])

    expect(exportButton).toBeEnabled()
    fireEvent.click(exportButton)
    getByText('Download link was sucessfully sent to your email')

    await new Promise((resolve) => setTimeout(resolve, 5000))

    await waitFor(
      () => {
        const elementAfterDelay = queryByText('Download link was sucessfully sent to your email')
        expect(elementAfterDelay).toBeNull()
      },
      { timeout: 6000 }
    )
  }, 100000)

  test('should show Adverse Actions text when type is ADVERSE_ACTIONS', () => {
    const { getByText } = render(
      <BrowserRouter>
        <PageHeader type={'ADVERSE_ACTIONS'} />
      </BrowserRouter>
    )
    getByText('Adverse Actions')
  })

  test('should render candidate details type page header correctly', () => {
    const { getByText, getAllByTestId } = render(
      <BrowserRouter>
        <PageHeader type={'CANDIDATE_DETAILS'} />
      </BrowserRouter>
    )
    getByText('Pre-Adverse-Action')
    const backIcon = getAllByTestId('iconComponent')[0]
    fireEvent.click(backIcon)
    expect(mockedUsedNavigate).toHaveBeenCalledWith(-1)

    const preAdverseButton = getByText('Pre-Adverse-Action')
    fireEvent.click(preAdverseButton)
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/preadverseaction')

    const engageButton = getByText('Engage')
    fireEvent.click(engageButton)
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(3)
  })
})
