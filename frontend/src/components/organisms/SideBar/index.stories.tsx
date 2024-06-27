import type { Meta, StoryObj } from '@storybook/react'
import SideBar from '.'

const meta: Meta<typeof SideBar> = {
  title: 'ORGANISMS/SideBar',
  component: SideBar,
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof SideBar>

export const HOME: Story = {
  args: {
    sx: {
      width: '300px'
    }
  }
}
