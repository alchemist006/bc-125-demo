import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import MuiCheckbox, { CheckboxSize, CheckboxColor } from './'

export default {
  title: 'Atoms/Checkbox',
  component: MuiCheckbox,
  argTypes: {
    size: {
      options: [CheckboxSize.Small, CheckboxSize.Medium],
      control: { type: 'radio' }
    },
    color: {
      options: [CheckboxColor.Primary, CheckboxColor.Secondary, CheckboxColor.Default],
      control: { type: 'radio' }
    },
    checked: { control: 'boolean' },
    label: { control: 'text' },
    onCheck: {}
  }
} as Meta<typeof MuiCheckbox>

const Template: StoryFn<typeof MuiCheckbox> = (args) => <MuiCheckbox {...args} />

export const Default = Template.bind({})
Default.args = {
  checked: false,
  label: 'I agree to the Privacy Policy',
  size: CheckboxSize.Medium,
  color: CheckboxColor.Default
}
