import type { Meta, StoryObj } from '@storybook/react'
import AdverseActionModal from '.'

const meta: Meta<typeof AdverseActionModal> = {
  title: 'MOLECULES/AdverseActionSentModal',
  component: AdverseActionModal,
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof AdverseActionModal>

export const HOME: Story = {
  args: {
    isOpen: true,
    width: '560px',
    height: '424px'
  }
}
