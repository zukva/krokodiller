import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AlertColor } from '@mui/material'

import { RootState } from '../index'

type AlertState = {
  message?: string
  severity?: AlertColor
}

const initialState = {
  message: '',
} as AlertState

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlertError: (state, action: PayloadAction<string>) => {
      state.message = action.payload
      state.severity = 'error'
    },
    setAlertSuccess: (state, action: PayloadAction<string>) => {
      state.message = action.payload
      state.severity = 'success'
    },
    setAlertInfo: (state, action: PayloadAction<string>) => {
      state.message = action.payload
      state.severity = 'info'
    },
    setAlertWarning: (state, action: PayloadAction<string>) => {
      state.message = action.payload
      state.severity = 'warning'
    },
  },
})

export const alertSelector = (state: RootState) => state.alert

export const { setAlertError, setAlertWarning, setAlertSuccess, setAlertInfo } =
  alertSlice.actions
export default alertSlice.reducer
