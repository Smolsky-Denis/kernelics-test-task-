import { theme } from 'common/constants/theme'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import { store } from 'app/store'
import { App } from 'App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
