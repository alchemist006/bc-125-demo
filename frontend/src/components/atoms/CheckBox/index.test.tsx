import React from 'react'
import { render, screen } from '@testing-library/react'
import MuiCheckBox from '../CheckBox'

describe('MuiCheckBox', () => {
  it(' should render checkbox with label', () => {
    const label = 'Checkbox Label'
    const { getByLabelText } = render(<MuiCheckBox label={label} />)
    const checkbox = getByLabelText(label)
    expect(checkbox).toBeInTheDocument()
  })

  it('should render checkbox checked', () => {
    const { getByRole } = render(<MuiCheckBox checked label={''} />)
    const checkbox = getByRole('checkbox')
    expect(checkbox).toBeChecked()
  })
})
