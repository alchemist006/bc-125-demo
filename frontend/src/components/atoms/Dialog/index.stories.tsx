import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import Dialog from '.'
import { Box } from '@mui/material'
import Typography from '../Typography'

const meta: Meta<typeof Dialog> = {
  title: 'Atoms/Dialog',
  component: Dialog,
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof Dialog>

export const Example: Story = {
  args: {
    open: true,
    children: (
      <Box>
        <Typography text="Hello World" variant="h1" />
      </Box>
    ),
    style: {
      borderRadius: '20px',
      padding: '1rem'
    }
  }
}
