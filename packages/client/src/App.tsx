import React from 'react'
import { useEffect } from 'react'

import { getUser } from './components/pages/profile/profileSlice'
import { Preloader } from './components/common/preloader'
import { MainRouter } from './routs/MainRouter'

import { useAppDispatch } from './hooks/store'
import './index.css'

function App() {
  const dispatch = useAppDispatch()

  // get data from local server
  useEffect(() => {
    dispatch(getUser())
  }, [])

  return (
    <div>
      <Preloader />
      <MainRouter />
    </div>
  )
}

export default App
