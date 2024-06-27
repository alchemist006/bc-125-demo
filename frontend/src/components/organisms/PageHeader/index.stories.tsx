import type { Meta, StoryObj } from '@storybook/react'
import PageHeader from '.'

const meta: Meta<typeof PageHeader> = {
  title: 'ORGANISMS/PageHeader',
  component: PageHeader,
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof PageHeader>

export const Default: Story = {
  args: {}
}
