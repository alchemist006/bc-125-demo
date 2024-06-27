import React from 'react'
import { render, screen } from '@testing-library/react'
import { TableData, candidateTableHeaders } from '../../../mocks/mockData'
import CandidateTable from '.'
import { BrowserRouter } from 'react-router-dom'

describe('CandidateTable', () => {
  it('renders the table headers correctly', () => {
    render(
      <BrowserRouter>
        <CandidateTable TableData={TableData} candidateTableHeaders={candidateTableHeaders} />
      </BrowserRouter>
    )

    candidateTableHeaders.forEach((header) => {
      const headerElement = screen.getByText(header)
      expect(headerElement).toBeInTheDocument()
      expect(headerElement.tagName).toBe('SPAN')
    })
  })
})
