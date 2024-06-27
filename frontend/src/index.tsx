import React from 'react'
import App from './App'
import ReactDOM from 'react-dom/client'
import theme from './theme'
import { ThemeProvider } from '@mui/material'
import { Auth0Provider } from '@auth0/auth0-react'
import { REDIRECT_URL, CLIENT_ID, DOMAIN } from './utils/constants'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ThemeProvider theme={theme}>
    <Auth0Provider domain={DOMAIN} clientId={CLIENT_ID} authorizationParams={REDIRECT_URL}>
      <App />
    </Auth0Provider>
  </ThemeProvider>
)
