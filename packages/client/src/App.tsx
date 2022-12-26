import React from 'react'
import { useEffect } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { getUser } from './components/pages/profile/profileSlice'
import { Preloader } from './components/common/preloader'
import { MainRouter } from './routes/MainRouter'

import { useAppDispatch, useAppSelector } from './hooks/store'
import { themes } from './config/themes'
import { themeSelector } from './store/theme'

function App() {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(themeSelector);

  // get data from local server
  useEffect(() => {
    dispatch(getUser())
  }, [])

  return (
    <ThemeProvider theme={themes[theme]}>
      <CssBaseline />
      <Preloader />
      <MainRouter />
    </ThemeProvider>
  )
}

export default App
