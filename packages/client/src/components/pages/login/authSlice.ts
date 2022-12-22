import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction'

import APIAuth, { typeSignin, typeSignup } from '../../../api/APIAuth'
import { AppThunk, AppDispatch } from '../../../store'
import { setIsLoading } from '../../common/preloader/loadingSlice'
import { getUser } from '../profile/profileSlice'

type typeAuthState = boolean

const initialState: typeAuthState = false

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth(state: typeAuthState, action: PayloadAction<typeAuthState>) {
      return action.payload
    },
  },
})

export const login =
  (data: typeSignin): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true))
    return APIAuth.signin(data)
      .then(() => {
        dispatch(getUser())
      })
      .catch(err => {
        console.log(err)
        dispatch(setIsLoading(false))
      })
  }

export const register =
  (data: typeSignup): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true))
    return APIAuth.signup(data)
      .then(() => {
        dispatch(getUser())
      })
      .catch(err => {
        console.log(err)
        dispatch(setIsLoading(false))
      })
  }

export const logout = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(setIsLoading(true))
  return APIAuth.logout()
    .then(() => {
      dispatch(getUser())
    })
    .catch(err => {
      console.log(err)
      dispatch(setIsLoading(false))
    })
}

export const { setIsAuth } = authSlice.actions
export default authSlice.reducer
