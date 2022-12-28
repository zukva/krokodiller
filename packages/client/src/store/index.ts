import {
  AnyAction,
  configureStore,
  Dispatch,
  Middleware,
  PreloadedState,
  Reducer,
  ThunkAction,
} from '@reduxjs/toolkit'
import { RouterState } from 'redux-first-history'

import makeRootReducer, { initServerReducer } from './rootReducer'

export const configureServerStore = () =>
  configureStore({
    reducer: initServerReducer,
  })

type ServerAppStore = ReturnType<typeof configureServerStore>
export type InitState = ReturnType<ServerAppStore['getState']>

export const configureClientStore = (
  preloadedState: PreloadedState<InitState>,
  routerMiddleware: Middleware<
    Record<string, unknown>,
    any,
    Dispatch<AnyAction>
  >,
  routerReducer: Reducer<RouterState>
) =>
  configureStore({
    reducer: makeRootReducer({ router: routerReducer }),
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(routerMiddleware),
    devTools: true,
    preloadedState,
  })

type AppStore = ReturnType<typeof configureClientStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export type AppThunk = ThunkAction<void, RootState, undefined, AnyAction>
