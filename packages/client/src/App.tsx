import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getUser } from './actions/auth'
import { Preloader } from './components/common/preloader'
import { MainRouter } from '../src/routs/MainRouter'

import './App.css'

function App() {
  // get data from local server
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser())
  }, [])

  return (
    <div className="App">
      <Preloader />
      Вот тут будет жить ваше приложение :)
      <MainRouter />
    </div>
  )
}

export default App
