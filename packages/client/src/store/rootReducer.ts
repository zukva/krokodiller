import { Reducer } from '@reduxjs/toolkit'

import isAuth from '../components/pages/login/authSlice'
import isLoading from '../components/common/preloader/loadingSlice'
import profile from '../components/pages/profile/profileSlice'
import image from '../components/pages/gamePage/elements/CanvasHolder/imageSlice'
import theme from './theme'

const makeRootReducer = (reducers: Record<string, Reducer>) => ({
  isLoading,
  isAuth,
  profile,
  image,
  theme,
  ...reducers,
})

export const initServerReducer = ({
  isLoading,
  isAuth,
  theme,
})

export default makeRootReducer
