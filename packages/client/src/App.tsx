import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { getUser } from './components/pages/profile/profileSlice'
import { Preloader } from './components/common/preloader'
import { MainRouter } from '../src/routs/MainRouter'

import { AppDispatch } from './store'
import { GlobalStyle, COMMON, COLORS, COLORS2 } from './styled'

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const [colors, setColors] = React.useState(COLORS)

  // get data from local server
  useEffect(() => {
    dispatch(getUser())
  }, [])
  console.log(colors)
  return (
    <ThemeProvider theme={{ ...colors, ...COMMON }}>
      <GlobalStyle />
      <Preloader />
      <button onClick={() => setColors(COLORS)}>1</button>
      <button onClick={() => setColors(COLORS2)}>2</button>
      Вот тут будет жить ваше приложение :)
      <MainRouter />
    </ThemeProvider>
  )
}

export default App
