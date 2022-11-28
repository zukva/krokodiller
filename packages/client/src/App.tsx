import React, { useEffect } from 'react'
import './App.css'
import { MainRouter } from '../src/routs/MainRouter'
import { useDispatch } from 'react-redux'
import { getUser } from './actions/auth'

function App() {
  // get data from local server
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser())
  }, [])

  return (
    <div className="App">
      Вот тут будет жить ваше приложение :)
      <MainRouter />
    </div>
  )
}

export default App
