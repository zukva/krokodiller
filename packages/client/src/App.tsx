import React from 'react'
import { Box, CssBaseline, NoSsr, ThemeProvider } from '@mui/material'

import Preloader from './components/common/preloader'
import { MainRouter } from './routes/MainRouter'
import { useAppSelector } from './hooks/store'
import { themes } from './config/themes'
import { themeSelector } from './store/theme'
import useAuth from './hooks/useAuth'
import AppAlert from './components/common/app-alert'
import useInitTheme from './hooks/useInitTheme'

function App() {
  const theme = useAppSelector(themeSelector)

  useInitTheme()
  useAuth()

  return (
    <ThemeProvider theme={themes[theme]}>
      <CssBaseline />
      <NoSsr>
        <Preloader />
      </NoSsr>
      <Box sx={{ position: 'relative' }}>
        <AppAlert />
        <MainRouter />
      </Box>
    </ThemeProvider>
  )
}

export default App
