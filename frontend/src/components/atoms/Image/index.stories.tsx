import type { Meta, StoryObj } from '@storybook/react'
import Image from '.'
import privacyPolicyImage from '../../../../public/assets/images/PrivacyPolicy.svg'

const meta: Meta<typeof Image> = {
  title: 'ATOMS/Image',
  component: Image,
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof Image>

export const privacyPolicyLogo: Story = {
  args: {
    src: privacyPolicyImage,
    width: '200px',
    height: '200px'
  }
}
