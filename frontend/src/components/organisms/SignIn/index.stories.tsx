import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import SignIn from './'

export default {
  title: 'Organisms/SignIn',
  component: SignIn
} as Meta

const Template: StoryFn = (args) => <SignIn {...args} sx={{ width: '480px' }} />

export const signin = Template.bind({})
signin.args = {
  disableButton: true
}
