import React from 'react'
import { render, screen } from '@testing-library/react'
import AdverseActionsTable from '.'
import { adverseActionsTableData } from '../../../mocks/mockData'
import { BrowserRouter } from 'react-router-dom'

describe('AdverseActionsTable', () => {
  it('renders the table headers', () => {
    render(
      <BrowserRouter>
        <AdverseActionsTable adverseActionTableData={adverseActionsTableData} />
      </BrowserRouter>
    )
    const headers = screen.getAllByRole('columnheader')
    expect(headers).toHaveLength(5)
    expect(headers[0]).toHaveTextContent('NAME')
    expect(headers[1]).toHaveTextContent('STATUS')
    expect(headers[2]).toHaveTextContent('PRE NOTICE DATE')
    expect(headers[3]).toHaveTextContent('POST NOTICE DATE')
  })

  it('renders the table rows with mock data', async () => {
    render(
      <BrowserRouter>
        <AdverseActionsTable adverseActionTableData={adverseActionsTableData} />
      </BrowserRouter>
    )
    expect(screen.getAllByText('John Smith')[0]).toBeInTheDocument()
    expect(screen.getByText('Serene')).toBeInTheDocument()
  })
})
