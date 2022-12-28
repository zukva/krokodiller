import { Reducer } from '@reduxjs/toolkit'

import isAuth from '../components/pages/login/authSlice'
import isLoading from '../components/common/preloader/loadingSlice'
import profile from '../components/pages/profile/profileSlice'
import theme from './theme'

const makeRootReducer = (reducers: Record<string, Reducer>) => ({
  isLoading,
  isAuth,
  profile,
  theme,
  ...reducers,
})

export const initServerReducer = ({
  isLoading,
  isAuth,
  theme,
})

export default makeRootReducer
