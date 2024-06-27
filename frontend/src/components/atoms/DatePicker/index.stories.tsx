import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import DatePicker from './'

export default {
  title: 'atoms/DatePicker',
  component: DatePicker
} as Meta

const Template: StoryFn = (args) => <DatePicker label={'Reports From'} {...args} />

export const ReportsFromDatePicker = Template.bind({})

export const ReportsToDatePicker = Template.bind({})
ReportsToDatePicker.args = {
  label: 'Reports To'
}
