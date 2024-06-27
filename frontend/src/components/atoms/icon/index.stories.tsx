import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import IconComponent from './'
import Adverse from '../../../../public/assets/images/adverse_action.svg'
import Github from '../../../../public/assets/images/github_logo.svg'

export default {
  title: 'atoms/Icon',
  component: IconComponent
} as Meta

const Template: StoryFn<typeof IconComponent> = (args) => <IconComponent {...args} />

export const AdverseIcon = Template.bind({})
AdverseIcon.args = {
  height: '24px',
  width: '24px',
  src: Adverse,
}

export const GithubIcon = Template.bind({})
GithubIcon.args = {
  src: Github
}
