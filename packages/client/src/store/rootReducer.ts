import { combineReducers, Reducer } from '@reduxjs/toolkit'

import isAuth from '../components/pages/login/authSlice'
import isLoading from '../components/common/preloader/loadingSlice'
import profile from '../components/pages/profile/profileSlice'

const makeRootReducer = (reducers: Record<string, Reducer>) =>
  combineReducers({
    isLoading,
    isAuth,
    profile,
    ...reducers,
  })

export const initServerReducer = combineReducers({
  isLoading,
  isAuth,
})

export default makeRootReducer
