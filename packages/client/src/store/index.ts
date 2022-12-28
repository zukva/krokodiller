import {
  AnyAction,
  configureStore,
  createAsyncThunk,
  Dispatch,
  Middleware,
  PreloadedState,
  Reducer,
  ThunkAction,
} from '@reduxjs/toolkit'
import { RouterState } from 'redux-first-history'

import makeRootReducerWithRouter, { initServerReducer } from './rootReducer'

export const configureServerStore = () =>
  configureStore({
    reducer: initServerReducer,
  })

type ServerAppStore = ReturnType<typeof configureServerStore>
export type InitState = ReturnType<ServerAppStore['getState']>

export const configureClientStore = (
  preloadedState: PreloadedState<InitState>,
  routerMiddleware: Middleware<any, any, Dispatch<AnyAction>>,
  routerReducer: Reducer<RouterState>
) =>
  configureStore({
    reducer: makeRootReducerWithRouter(routerReducer),
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(routerMiddleware),
    devTools: true,
    preloadedState,
  })

type AppStore = ReturnType<typeof configureClientStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
