import { Reducer } from '@reduxjs/toolkit'

import theme from './theme'
import alert from './alert'
import auth from './auth'
import profile from './profile'
import leaderboard from './leaderboard'

const makeRootReducerWithRouter = (router: Reducer) => ({
  profile,
  leaderboard,
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
