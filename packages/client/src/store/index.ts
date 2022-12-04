import { configureStore, AnyAction } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk'

import rootReducer, { RootState } from './rootReducer'

export const store = configureStore({
  reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, undefined, AnyAction>;
