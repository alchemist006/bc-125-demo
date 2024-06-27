import type { Meta, StoryObj } from '@storybook/react'
import Typography from '.'
import theme from '../../../theme'

const meta: Meta<typeof Typography> = {
  title: 'ATOMS/Typography',
  component: Typography,
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof Typography>

export const signup: Story = {
  args: {
    text: 'Sign in',
    variant: 'h1'
  }
}

export const loginCredientials: Story = {
  args: {
    text: 'Please enter your login credentials',
    variant: 'body2',
    color: theme.palette.textColor.mediumEmphasis
  }
}

export const forgotPassword: Story = {
  args: {
    text: 'Forgot password?',
    variant: 'body1',
    color: theme.palette.primary[500]
  }
}

export const candidateInformation: Story = {
  args: {
    text: 'Candidate Information',
    variant: 'subtitle1'
  }
}

export const candidateEmail: Story = {
  args: {
    text: 'James.co',
    variant: 'caption2',
    color: theme.palette.textColor.lowEmphasis
  }
}
