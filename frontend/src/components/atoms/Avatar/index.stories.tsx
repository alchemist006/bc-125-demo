import type { Meta, StoryObj } from '@storybook/react'
import Avatar from '.'
import AVATAR_LOGO from '../../../../public/assets/images/avatar_image.svg'

const meta: Meta<typeof Avatar> = {
  title: 'ATOMS/Avatar',
  component: Avatar,
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof Avatar>

export const WithPic: Story = {
  args: {
    src: AVATAR_LOGO
  }
}

export const WithoutPic: Story = {
  args: {}
}
