import { Meta, StoryFn } from '@storybook/react'
import Signup from './index'

const meta: Meta = {
  component: Signup,
  title: 'organisms/SignUp'
}
export default meta

const Template = () => <Signup sx={{ width: '480px' }} />

export const basic = Template.bind({})
