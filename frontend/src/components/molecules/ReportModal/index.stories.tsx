import type { Meta, StoryObj } from '@storybook/react'
import ReportModal from '.'

const meta: Meta<typeof ReportModal> = {
  title: 'MOLECULES/ReportModal',
  component: ReportModal,
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof ReportModal>

export const Default: Story = {
  args: {
    style: {
      width: '1000px'
    }
  }
}
