import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { push } from 'redux-first-history'

import authAPI from '../../api/AuthAPI'
import { ApiTypes, RequestState } from '../../types'
import { setAlertError } from '../alert'
import { RootState } from '../index'
import { createAppAsyncThunk } from '../utils'
import { RoutesList } from '../../routes/routesList'
import { isUnprotectedPathname } from './utils'
import { getUserTheme } from '../theme'

type AuthState = {
  signUpRequest: {
    loading: RequestState
    payload?: ApiTypes.SignUpResponse
  }
  signInRequest: {
    loading: RequestState
  }
  userInfo: Partial<ApiTypes.UserInfo>
  authUser: {
    loading: RequestState
  }
}

const initialState = {
  signUpRequest: {
    loading: 'idle',
  },
  signInRequest: {
    loading: 'idle',
  },
  authUser: {
    loading: 'idle',
  },
} as AuthState

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

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<ApiTypes.UserInfo>>) => {
      state.userInfo = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.signUpRequest.payload = action.payload
        state.signUpRequest.loading = 'succeeded'
      })
      .addCase(signUpUser.pending, state => {
        state.signUpRequest.loading = 'pending'
      })
      .addCase(signInUser.fulfilled, state => {
        state.signInRequest.loading = 'succeeded'
      })
      .addCase(signInUser.pending, state => {
        state.signInRequest.loading = 'pending'
      })
      .addCase(authUser.fulfilled, state => {
        state.authUser.loading = 'succeeded'
      })
      .addCase(authUser.pending, state => {
        state.authUser.loading = 'pending'
      })
      .addCase(authUser.rejected, state => {
        state.authUser.loading = 'failed'
      })
  },
})

export const userInfoSelector = (state: RootState) => state.auth?.userInfo
export const isAuthUserPendingSelector = (state: RootState) => {
  const status = state.auth?.authUser?.loading
  return status === 'idle' || status === 'pending'
}

export const { setUser } = authSlice.actions

export default authSlice.reducer
