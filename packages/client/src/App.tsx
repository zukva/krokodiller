import React from 'react'

import { MainRouter } from '../src/routs/MainRouter'

function App() {
  const isAuth = true // mock auth

  return (
    <div className="App">
      Вот тут будет жить ваше приложение :)
      <MainRouter isAuth={isAuth} />
    </div>
  )
}

export default App
