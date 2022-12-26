import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction'

import APIAuth from '../../../api/APIAuth'
import { AppThunk } from '../../../store'
import { setIsLoading } from '../../common/preloader/loadingSlice'
import { getUser } from '../profile/profileSlice'
import {ApiTypes} from '../../../types';

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
  (data: ApiTypes.SignInData): AppThunk =>
  (dispatch) => {
    dispatch(setIsLoading(true))
    return APIAuth.signIn(data)
      .then(() => {
        dispatch(getUser())
      })
      .catch(err => {
        console.log(err)
        dispatch(setIsLoading(false))
      })
  }

export const register =
  (data: ApiTypes.SignUpData): AppThunk =>
  (dispatch) => {
    dispatch(setIsLoading(true))
    return APIAuth.signUp(data)
      .then(() => {
        dispatch(getUser())
      })
      .catch(err => {
        console.log(err)
        dispatch(setIsLoading(false))
      })
  }

export const logout = (): AppThunk => (dispatch) => {
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
