import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import TypographyInput from './index'
import { TextFieldSize } from '../../atoms/textField'
import theme from '../../../theme'

const meta: Meta<typeof TypographyInput> = {
  title: 'molecules/TypographyInput',
  component: TypographyInput,
  argTypes: {
    label: { control: 'text' },
    color: { control: 'color' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    onChange: { action: 'onChange' },
    isPassword: { control: 'boolean' },
    width: { control: 'text' },
    height: { control: 'text' },
    size: { control: 'select', options: ['small', 'medium'] },
    borderRadius: { control: 'text' }
  }
}

const Template: StoryFn<typeof TypographyInput> = (args) => <TypographyInput {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Password',
  color: `${theme.palette.textColor.mediumEmphasis}`,
  placeholder: 'Enter your Password',
  value: '',
  onChange: () => {
    console.log()
  },
  isPassword: false,
  width: '30%',
  height: 50,
  size: 'small' as TextFieldSize,
  borderRadius: '4px'
}

export default meta
