import { Meta, StoryFn } from '@storybook/react'
import Otpcard from './index'
import theme from '../../../theme'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
export default {
  title: 'organisms/OTPCard',
  component: Otpcard
} as Meta<typeof Otpcard>

const template: StoryFn<typeof Otpcard> = (args) => (
  <ThemeProvider theme={theme}>
    <Otpcard sx={{ width: '480px' }} />
  </ThemeProvider>
)

export const otpCard = template.bind({})
otpCard.args = {}
