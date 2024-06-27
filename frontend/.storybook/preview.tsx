import type { Preview } from '@storybook/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import theme from '../src/theme'
import { BrowserRouter } from 'react-router-dom'
const withThemeProvider = (Story, context) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story {...context} />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export const decorators = [withThemeProvider]

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
