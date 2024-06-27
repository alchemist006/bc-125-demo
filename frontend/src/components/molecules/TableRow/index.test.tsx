import React from 'react'
import { render } from '@testing-library/react'
import GenericTableRow from '.'
import { TableRowPropsInterface } from '../../../utils/interfaces'
import { BrowserRouter } from 'react-router-dom'

describe('GenericTableRow', () => {
  const defaultProps: TableRowPropsInterface = {
    candidateName: 'John Doe',
    adjudication: '-',
    status: 'CLEAR',
    location: 'Sukamanah',
    date: '9/7/2023',
    preNoticeDate: '9/8/2023',
    postNoticeDate: '9/9/2023',
    id: 1
  }

  it('renders with default props', () => {
    const { getByText } = render(
      <BrowserRouter>
        <GenericTableRow {...defaultProps} />
      </BrowserRouter>
    )

    expect(getByText('John Doe')).toBeInTheDocument()
    expect(getByText('CLEAR')).toBeInTheDocument()
    expect(getByText('Sukamanah')).toBeInTheDocument()
    expect(getByText('9/7/2023')).toBeInTheDocument()
    expect(getByText('-')).toBeInTheDocument()
    expect(getByText('9/8/2023')).toBeInTheDocument()
    expect(getByText('9/9/2023')).toBeInTheDocument()
  })

  it('renders with searchName', () => {
    const { getByText } = render(
      <BrowserRouter>
        <GenericTableRow {...defaultProps} searchName="Search Name" />
      </BrowserRouter>
    )

    expect(getByText('Search Name')).toBeInTheDocument()
  })

  it('renders with custom cell width', () => {
    const { container } = render(
      <BrowserRouter>
        <GenericTableRow {...defaultProps} cellwidth="150px" />
      </BrowserRouter>
    )
    const cell = container.querySelector('.MuiTableCell-root')

    expect(cell).toHaveStyle('width: 150px')
  })
  it('renders with default adjudication and status', () => {
    const { getByText } = render(
      <BrowserRouter>
        <GenericTableRow {...defaultProps} />
      </BrowserRouter>
    )

    expect(getByText('-')).toBeInTheDocument()
    expect(getByText('CLEAR')).toBeInTheDocument()
  })

  it('renders with custom adjudication and status', () => {
    const { getByText } = render(
      <BrowserRouter>
        <GenericTableRow {...defaultProps} adjudication="APPROVED" status="PENDING" />
      </BrowserRouter>
    )

    expect(getByText('APPROVED')).toBeInTheDocument()
    expect(getByText('PENDING')).toBeInTheDocument()
  })

  it('renders with custom adjudication', () => {
    const { getByText } = render(
      <BrowserRouter>
        <GenericTableRow {...defaultProps} adjudication="ADVERSE_ACTION" />
      </BrowserRouter>
    )

    expect(getByText('ADVERSE ACTION')).toBeInTheDocument()
  })

  it('renders with unspecified adjudication', () => {
    const { getByText } = render(
      <BrowserRouter>
        <GenericTableRow {...defaultProps} adjudication="UNSPECIFIED" />
      </BrowserRouter>
    )

    expect(getByText('-')).toBeInTheDocument()
  })

  it('renders with other custom adjudication', () => {
    const { getByText } = render(
      <BrowserRouter>
        <GenericTableRow {...defaultProps} adjudication="SOME_CUSTOM_ADJUDICATION" />
      </BrowserRouter>
    )

    expect(getByText('SOME_CUSTOM_ADJUDICATION')).toBeInTheDocument()
  })

  it('renders with unspecified adjudication when adjudication is missing', () => {
    const { getByText } = render(
      <BrowserRouter>
        <GenericTableRow {...defaultProps} />
      </BrowserRouter>
    )

    expect(getByText('-')).toBeInTheDocument()
  })
})
