import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import CustomTextField, { TextFieldSize } from './index'

export default {
  title: 'Atoms/CustomTextField',
  component: CustomTextField
} as Meta<typeof CustomTextField>

const Template: StoryFn<typeof CustomTextField> = (args) => <CustomTextField {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Enter your text',
  value: '',
  onChange: (value: string) => console.log(value),
  isPassword: false,
  width: '20%',
  height: 40,
  size: TextFieldSize.MEDIUM, 
  borderRadius: '4px'
}

export const Password = Template.bind({})
Password.args = {
  placeholder: 'Enter Password',
  value: '',
  onChange: (value: string) => console.log(value),
  isPassword: true,
  width: '20%',
  height: 40,
  size: TextFieldSize.MEDIUM, 
  borderRadius: '4px'
}

export const SmallSize = Template.bind({})
SmallSize.args = {
  placeholder: 'Small size',
  value: '',
  onChange: (value: string) => console.log(value),
  isPassword: false,
  width: '20%',
  height: 40,
  size: TextFieldSize.SMALL,
  borderRadius: '4px'
}
