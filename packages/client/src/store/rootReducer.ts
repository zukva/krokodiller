import { Reducer } from '@reduxjs/toolkit'

import image from '../components/pages/gamePage/elements/CanvasHolder/imageSlice'
import theme from './theme'
import alert from './alert'
import auth from './auth'
import profile from './profile'

const makeRootReducerWithRouter = (router: Reducer) => ({
  profile,
  image,
  theme,
  alert,
  auth,
  router,
})

export const initServerReducer = {
  theme,
  alert,
}

export default makeRootReducerWithRouter
