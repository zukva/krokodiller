import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getUser } from './components/pages/profile/profileSlice'
import { Preloader } from './components/common/preloader'
import { MainRouter } from '../src/routs/MainRouter'

import { AppDispatch } from './store'
import { CssBaseline } from '@mui/material'

function App() {
  const dispatch = useDispatch<AppDispatch>()

  // get data from local server
  useEffect(() => {
    dispatch(getUser())
  }, [])

  return (
    <div>
      <CssBaseline />
      <Preloader />
      Вот тут будет жить ваше приложение :)
      <MainRouter />
    </div>
  )
}

export default App
