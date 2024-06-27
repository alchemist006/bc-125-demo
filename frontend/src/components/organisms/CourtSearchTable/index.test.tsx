import React from 'react'
import { render } from '@testing-library/react'
import CourtSearchTable from '.'
import { BrowserRouter } from 'react-router-dom'

describe('CourtSearchTable Component', () => {
  const courtTableHeaders = ['Header 1', 'Header 2', 'Header 3']
  const tableData = [
    {
      id: 1,
      search: 'Search 1',
      status: 'Status 1',
      date: 'Date 1'
    },
    {
      id: 2,
      search: 'Search 2',
      status: 'Status 2',
      date: 'Date 2'
    }
  ]

  it('renders the table headers correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <CourtSearchTable courtTableHeaders={courtTableHeaders} TableData={[]} />
      </BrowserRouter>
    )

    courtTableHeaders.forEach((header) => {
      const headerElement = getByText(new RegExp(header, 'i')) // Case-insensitive search
      expect(headerElement).toBeInTheDocument()
    })
  })

  it('renders the table data correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <CourtSearchTable courtTableHeaders={courtTableHeaders} TableData={tableData} />
      </BrowserRouter>
    )

    tableData.forEach((row) => {
      const searchCell = getByText(new RegExp(row.search, 'i')) // Case-insensitive search
      const statusCell = getByText(new RegExp(row.status, 'i')) // Case-insensitive search

      expect(searchCell).toBeInTheDocument()
      expect(statusCell).toBeInTheDocument()
    })
  })
})
