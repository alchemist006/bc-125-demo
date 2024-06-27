import ForgotPassword from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'organisms/ForgotPassword',
  component: ForgotPassword
} as Meta<typeof ForgotPassword>

const template: StoryFn<typeof ForgotPassword> = (args) => (
  <ForgotPassword {...args} sx={{ width: '480px' }} />
)

export const small = template.bind({})
