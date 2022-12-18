import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction'

type typeLoadingState = boolean
const initialState: typeLoadingState = true

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setIsLoading(
      state: typeLoadingState,
      action: PayloadAction<typeLoadingState>
    ) {
      return action.payload
    },
  },
})

export const { setIsLoading } = loadingSlice.actions
export default loadingSlice.reducer
