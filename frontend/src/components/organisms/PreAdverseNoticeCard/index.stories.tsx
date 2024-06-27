import type { Meta, StoryObj } from '@storybook/react'
import PreAdverseNoticeCard from '.'

const meta: Meta<typeof PreAdverseNoticeCard> = {
  title: 'ORGANISMS/PreAdverseNoticeCard',
  component: PreAdverseNoticeCard,
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof PreAdverseNoticeCard>

export const Default: Story = {
  args: {
    sx: {
      width: '1049px',
      height: 'auto',
      borderRadius: '12px'
    }
  }
}
