import type { Meta, StoryObj } from '@storybook/react'
import PreviewNoticeModal from '.'

const meta: Meta<typeof PreviewNoticeModal> = {
  title: 'MOLECULES/PreviewNoticeModal',
  component: PreviewNoticeModal,
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof PreviewNoticeModal>

export const Default: Story = {
  args: {
    isOpen: true,
    sx: {
      width: '696px',
      height: 'auto'
    }
  }
}
