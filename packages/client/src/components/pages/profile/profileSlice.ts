import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction'

import APIAuth from '../../../api/APIAuth'
import { AppThunk, AppDispatch } from '../../../store'
import { setIsLoading } from '../../common/preloader/loadingSlice'
import { setIsAuth } from '../login/authSlice'

export type typeProfileState = {
  id: string
  first_name: string
  second_name: string
  display_name: string
  login: string
  email: string
  phone: string
  avatar: string
}

const initialState = {} as typeProfileState

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile(
      state: typeProfileState,
      action: PayloadAction<typeProfileState>
    ) {
      return action.payload
    },
  },
})

export const getUser = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(setIsLoading(true))
  return APIAuth.getUser()
    .then(({ data }) => {
      dispatch(setProfile(data))
      dispatch(setIsAuth(true))
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
