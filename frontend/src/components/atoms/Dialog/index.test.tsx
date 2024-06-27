/* eslint-disable react/no-children-prop */
import { Box } from '@mui/material'
import { render } from '@testing-library/react'
import React from 'react'
import Dialog from '.'
import Typography from '../Typography'

describe('Dialog', () => {
  const children = (
    <Box>
      <Typography text="Hello World" variant="h1" />
    </Box>
  )
  test('renders correctly text is not showing', () => {
    render(<Dialog open={false} children={children} />)
  })
  test('renders correctly text is  showing', () => {
    const { getByText } = render(<Dialog open={true} children={children} />)
    expect(getByText('Hello World')).toBeInTheDocument()
  })
})
