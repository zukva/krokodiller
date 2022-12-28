import { createSlice } from '@reduxjs/toolkit'

import { profileAPI } from '../../api/ProfileAPI'
import { ApiTypes, RequestState } from '../../types'
import { setAlertError, setAlertSuccess } from '../alert'
import { setUser } from '../auth'
import { createAppAsyncThunk } from '../utils'

type ProfileState = {
  changeProfileRequest: {
    loading: RequestState
    payload?: ApiTypes.UserInfo
  }
  changePasswordRequest: {
    loading: RequestState
  }
  changeAvatarRequest: {
    loading: RequestState
  }
}

const initialState = {
  changeProfileRequest: {
    loading: 'idle',
  },
  changePasswordRequest: {
    loading: 'idle',
  },
  changeAvatarRequest: {
    loading: 'idle',
  },
} as ProfileState

export const changeProfile = createAppAsyncThunk(
  'profile/changeProfile',
  async (data: ApiTypes.ProfileData, { dispatch }) => {
    try {
      const response = await profileAPI.changeProfile(data)
      dispatch(setAlertSuccess('Данные успешно изменены'))
      dispatch(setUser(response))
      return response
    } catch (error: any) {
      dispatch(setAlertError(error))
    }
  }
)

export const changePassword = createAppAsyncThunk(
  'profile/changePassword',
  async (data: ApiTypes.PasswordData, { dispatch }) => {
    try {
      await profileAPI.changePassword(data)
      dispatch(setAlertSuccess('Пароль успешно изменен'))
    } catch (error: any) {
      dispatch(setAlertError(error))
    }
  }
)

export const changeAvatar = createAppAsyncThunk(
  'profile/changeAvatar',
  async (data: FormData, { dispatch }) => {
    try {
      const response = await profileAPI.changeAvatar(data)
      dispatch(setUser(response))
      dispatch(setAlertSuccess('Аватар успешно изменен'))
    } catch (error: any) {
      dispatch(setAlertError(error))
    }
  }
)

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(changeProfile.fulfilled, (state, action) => {
        state.changeProfileRequest.payload = action.payload
        state.changeProfileRequest.loading = 'succeeded'
      })
      .addCase(changeProfile.pending, state => {
        state.changeProfileRequest.loading = 'pending'
      })
      .addCase(changePassword.fulfilled, state => {
        state.changePasswordRequest.loading = 'succeeded'
      })
      .addCase(changePassword.pending, state => {
        state.changePasswordRequest.loading = 'pending'
      })
      .addCase(changeAvatar.fulfilled, state => {
        state.changeAvatarRequest.loading = 'succeeded'
      })
      .addCase(changeAvatar.pending, state => {
        state.changeAvatarRequest.loading = 'pending'
      })
  },
})

export default profileSlice.reducer
