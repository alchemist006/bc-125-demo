import React from 'react'
import { render, fireEvent, screen, within } from '@testing-library/react'
import PaginationMolecule from './'

describe('PaginationMolecule', () => {
  it('should render with default props', () => {
    const { getByTestId } = render(<PaginationMolecule />)
    expect(getByTestId('dropDown')).toBeInTheDocument()
  })
  it('should render with custom page and label', () => {
    const { getByTestId } = render(<PaginationMolecule page={2} label="20" />)
    const typographyElement = getByTestId('typography-component')
    expect(typographyElement).toHaveTextContent('10 out of 20 per page')
  })

  it('should call handlePageChange when page changes', () => {
    const handlePageChange = jest.fn()
    const { getByLabelText } = render(
      <PaginationMolecule page={3} handlePageChange={handlePageChange} />
    )
    fireEvent.click(getByLabelText('Go to next page'))

    const drop = screen.getByTestId('dropDown')
    const button = within(drop).getByRole('button')
    fireEvent.mouseDown(button)
    const listBox = within(screen.getByRole('presentation')).getByRole('listbox')
    const options = within(listBox).getAllByRole('option')
    const optionValues = options.map((li) => li.getAttribute('data-value'))
    fireEvent.click(options[1])
  })
})
