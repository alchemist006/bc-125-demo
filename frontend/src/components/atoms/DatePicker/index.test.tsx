import React from 'react'
import { render, screen } from '@testing-library/react'
import DatePickers from './'

describe('ResponsiveDatePickers Component', () => {
  it('should render the label correctly', () => {
    const label = 'Reports From'
    render(<DatePickers label={label} />)
    const labelElement = screen.getByText(label)
    expect(labelElement).toBeInTheDocument()
  })

  it('should render the date picker correctly', () => {
    const label = 'Reports To'
    render(<DatePickers label={label} />)
    const datePickerElement = screen.getByRole('textbox')
    expect(datePickerElement).toBeInTheDocument()
  })
})
