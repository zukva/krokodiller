import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction'

import APIAuth from '../../../api/APIAuth'
import { AppThunk } from '../../../store'
import { setIsLoading } from '../../common/preloader/loadingSlice'
import { setIsAuth } from '../login/authSlice'
import { getUserTheme } from '../../../store/theme'
import {ApiTypes} from '../../../types'

export type ProfileState = ApiTypes.UserInfo;

const initialState = {} as ProfileState

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile(
      state: ProfileState,
      action: PayloadAction<ProfileState>
    ) {
      return action.payload
    },
  },
})

export const getUser = (): AppThunk => (dispatch) => {
  dispatch(setIsLoading(true))
  return APIAuth.getUser()
    .then((data) => {
      dispatch(setProfile(data))
      dispatch(setIsAuth(true))
      dispatch(getUserTheme());
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      dispatch(setIsLoading(false))
    })
}

export const { setProfile } = profileSlice.actions
export default profileSlice.reducer
