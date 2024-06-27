import React from 'react'
import PaginationMolecule, { PaginationPropsInterface } from './'
import { StoryFn, Meta } from '@storybook/react'

export default {
  title: 'molecules/PaginationMolecule',
  component: PaginationMolecule
} as Meta

const Template: StoryFn<PaginationPropsInterface> = (args) => <PaginationMolecule {...args} />

export const Default = Template.bind({})
Default.args = {
  label: '84',
  handleChange: (event, child) => {
    console.log('Dropdown value changed:', event, child)
  },
  handlePageChange: (event, page) => {
    console.log('Page changed:', page)
  }
}
