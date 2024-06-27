import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import CandidatePage from '.'
import { BrowserRouter } from 'react-router-dom'

jest.mock('../../services/index', () => ({
  getCandidatesData: jest.fn(() =>
    Promise.resolve([
      {
        id: 1,
        name: 'John Doe',
        adjudication: '-',
        status: 'Clear',
        location: 'New York',
        date: '2023-09-11'
      },
      {
        id: 2,
        name: 'Jane Doe',
        adjudication: '-',
        status: 'Consider',
        location: 'Los Angeles',
        date: '2023-09-12'
      },
      {
        id: 3,
        name: 'Jane Doe',
        adjudication: '-',
        status: 'Pending',
        location: 'Los Angeles',
        date: '2023-09-12'
      }
    ])
  )
}))

describe('CandidatePage', () => {
  test('should show AdverseActionModal modal when session storage is set', async () => {
    sessionStorage.clear()
    sessionStorage.setItem('hasModalBeenOpened', 'true')
    render(
      <BrowserRouter>
        <CandidatePage />
      </BrowserRouter>
    )

    await waitFor(() => {
      const modalText = 'Pre-Advance Action notice successfully sent'
      const refreshedModal = screen.getByText(modalText)
      expect(refreshedModal).toBeInTheDocument()
    })

    sessionStorage.clear()
  })

  it('should display filtered results based on search input', async () => {
    render(
      <BrowserRouter>
        <CandidatePage />
      </BrowserRouter>
    )
    const searchInput = screen.getByPlaceholderText('Search any candidate')
    fireEvent.change(searchInput, { target: { value: 'John' } })
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument()
    })
  })

  it('should display filtered results based on status selection', async () => {
    render(
      <BrowserRouter>
        <CandidatePage />
      </BrowserRouter>
    )

    const filterBox = screen.getByText('Filter')
    fireEvent.click(filterBox)
    const statusSelect = screen.getByText('Clear')
    fireEvent.click(statusSelect)
    setTimeout(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument()
    })
  })

  test('should not show AdverseActionModal modal when session storage is not set', async () => {
    sessionStorage.clear()

    render(
      <BrowserRouter>
        <CandidatePage />
      </BrowserRouter>
    )
    const modalText = 'Pre-Advance Action notice successfully sent'
    const modal = screen.queryByText(modalText)
    expect(modal).toBeNull()
  })
})
