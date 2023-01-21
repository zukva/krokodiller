import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { push } from 'redux-first-history'

import authAPI from '../../api/AuthAPI'
import { ApiTypes, RequestStore } from '../../types'
import { setAlertError } from '../alert'
import { RootState } from '../index'
import { addRequestExtraCases, createAppAsyncThunk } from '../utils'
import { RoutesList } from '../../routes/routesList'
import { isUnprotectedPathname } from './utils'
import { getUserTheme } from '../theme'
import { INIT_REQUEST_STATE } from '../consts'
import { DEV_CLIENT_PATH, PROD_CLIENT_PATH } from '../../config/api'

type AuthState = {
  signUpRequest: RequestStore<ApiTypes.SignUpResponse>
  signInRequest: RequestStore
  userInfo: Partial<ApiTypes.UserInfo>
  authUserRequest: RequestStore
  oAuthSignIn: RequestStore
}

const initialState = {
  signUpRequest: INIT_REQUEST_STATE,
  signInRequest: INIT_REQUEST_STATE,
  authUserRequest: INIT_REQUEST_STATE,
  oAuthSignIn: INIT_REQUEST_STATE,
  authWithOAuth: INIT_REQUEST_STATE,
  userInfo: {},
} as AuthState

const CLIENT_PATH = import.meta.env.PROD ? PROD_CLIENT_PATH : DEV_CLIENT_PATH

export const authUser = createAppAsyncThunk(
  'auth/authUser',
  async (_, { dispatch, getState }) => {
    const { location } = getState().router
    try {
      const response = await authAPI.getUser()
      dispatch(setUser(response))
      dispatch(getUserTheme())
      if (
        location &&
        'pathname' in location &&
        isUnprotectedPathname(location.pathname)
      ) {
        dispatch(push(RoutesList.StartPage))
      }
    } catch (error: any) {
      if (!isUnprotectedPathname(location.pathname)) {
        dispatch(push(RoutesList.LoginPage))
      }
      dispatch(setAlertError(error))
    }
  }
)

export const signUpUser = createAppAsyncThunk(
  'auth/signUp',
  async (data: ApiTypes.SignUpData, { dispatch }) => {
    try {
      const response = await authAPI.signUp(data)
      dispatch(push(RoutesList.StartPage))
      dispatch(authUser())
      return response
    } catch (error: any) {
      dispatch(setAlertError(error))
    }
  }
)

export const signInUser = createAppAsyncThunk(
  'auth/signIn',
  async (data: ApiTypes.SignInData, { dispatch }) => {
    try {
      const response = await authAPI.signIn(data)
      dispatch(push(RoutesList.StartPage))
      dispatch(authUser())
      return response
    } catch (error: any) {
      dispatch(setAlertError(error))
    }
  }
)

export const logout = createAppAsyncThunk(
  'auth/logout',
  async (_, { dispatch }) => {
    try {
      await authAPI.logout()
      dispatch(push(RoutesList.LoginPage))
    } catch (error: any) {
      dispatch(setAlertError(error))
    }
  }
)

export const oAuthSignIn = createAppAsyncThunk(
  'auth/oAuthSignIn',
  async (_, { dispatch }) => {
    try {
      const redirectUri = CLIENT_PATH as string
      const res = await authAPI.oauthGetServiceId({
        redirect_uri: redirectUri,
      })
      const url = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${res.service_id}&redirect_uri=${CLIENT_PATH}`
      dispatch(push(url))
    } catch (error: any) {
      dispatch(setAlertError(error))
    }
  }
)

export const authWithOAuth = createAppAsyncThunk(
  'auth/authWithOAuth',
  async (code: string, { dispatch }) => {
    try {
      await authAPI.oauthSignIn({
        code,
        redirect_uri: CLIENT_PATH,
      })
      dispatch(authUser())
    } catch (error: any) {
      dispatch(setAlertError(error))
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<ApiTypes.UserInfo>>) => {
      state.userInfo = action.payload
    },
  },
  extraReducers: builder => {
    addRequestExtraCases(builder, authUser, 'authUserRequest')
    addRequestExtraCases(builder, signUpUser, 'signUpRequest')
    addRequestExtraCases(builder, signInUser, 'signInRequest')
    addRequestExtraCases(builder, oAuthSignIn, 'oAuthSignIn')
    addRequestExtraCases(builder, authWithOAuth, 'authWithOAuth')
  },
})

export const userInfoSelector = (state: RootState) => state.auth?.userInfo
export const isAuthUserPendingSelector = (state: RootState) => {
  const status = state.auth?.authUserRequest?.loading
  return status === 'idle' || status === 'pending'
}

export const { setUser } = authSlice.actions

export default authSlice.reducer
