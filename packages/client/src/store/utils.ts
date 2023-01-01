import {
  ActionReducerMapBuilder,
  AsyncThunk,
  createAsyncThunk,
} from '@reduxjs/toolkit'
import { AppDispatch, RootState } from './index'

type ThunkApiConfig = {
  state: RootState
  dispatch: AppDispatch
  extra?: unknown
  rejectValue?: unknown
  serializedErrorType?: unknown
  pendingMeta?: unknown
  fulfilledMeta?: unknown
  rejectedMeta?: unknown
}

export const createAppAsyncThunk = createAsyncThunk.withTypes<ThunkApiConfig>()

export const addRequestExtraCases = function (
  builder: ActionReducerMapBuilder<any>,
  thunk: AsyncThunk<any, any, ThunkApiConfig>,
  storeName: string
) {
  builder
    .addCase(thunk.fulfilled, (state, action) => {
      state[storeName].payload = action.payload
      state[storeName].loading = 'succeeded'
    })
    .addCase(thunk.pending, state => {
      state[storeName].loading = 'pending'
    })
    .addCase(thunk.rejected, state => {
      state[storeName].loading = 'failed'
    })
}
