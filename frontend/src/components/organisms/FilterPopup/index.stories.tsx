import type { Meta, StoryObj } from '@storybook/react'
import FilterPopup from '.'

const meta: Meta<typeof FilterPopup> = {
  title: 'ORGANISMS/FilterPopup',
  component: FilterPopup,
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof FilterPopup>

export const Default: Story = {
  args: {
    sx: {
      width: '285px'
    }
  }
}
