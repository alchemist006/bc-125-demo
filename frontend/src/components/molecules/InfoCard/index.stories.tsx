import type { Meta, StoryObj } from '@storybook/react'
import IconCard from '.'
import USER_LOGO from '../../../../public/assets/icons/user.svg'
import EMAIL_LOGO from '../../../../public/assets/icons/Email.svg'

const meta: Meta<typeof IconCard> = {
  title: 'MOLECULES/IconCard',
  component: IconCard,
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof IconCard>

export const UserInfoCard: Story = {
  args: {
    icon: USER_LOGO,
    title: 'Name',
    content: 'John Smith',
    sx: {
      width: '331px',
      height: '68px'
    }
  }
}

export const EmailInfoCard: Story = {
  args: {
    icon: EMAIL_LOGO,
    title: 'Email',
    content: 'John.smith@checkr.com',
    sx: {
      width: '331px',
      height: '68px'
    }
  }
}
