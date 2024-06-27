import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import LogoutModal from '.'

const meta: Meta<typeof LogoutModal> = {
  title: 'MOLECULES/LogoutModal',
  component: LogoutModal,
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof LogoutModal>

export const Example: Story = {
  args: {
    isOpen: true,
    sx: {
      width: '450px',
      height: 'auto'
    }
  }
}
