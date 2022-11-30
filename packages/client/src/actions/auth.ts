import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import APIAuth, { typeSignin, typeSignup } from '../api/APIAuth';
import { setLoading } from './common';
import { typeState } from '../store';

export enum AuthActions {
  Signup = 'signup',
  SetAuth = 'setAuth',
  SetUser = 'setUser',
  Logout = 'logout'
}

export type typeAuthAction = {
  type: AuthActions.SetAuth,
  isAuth: boolean,
}

export type typeUserAction = {
  type: AuthActions.SetUser,
  data: typeSignup,
}

export const signin = (data: typeSignin): ThunkAction<void, typeState, unknown, AnyAction> => {
  return (dispatch: ThunkDispatch<typeState, unknown, AnyAction>) => {
    dispatch(setLoading(true))
    return APIAuth.signin(data)
      .then(() => {
        dispatch(setAuth(true))
      })
      .catch(() => {
        dispatch(setAuth(false))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}

export const getUser = (): ThunkAction<void, typeState, unknown, AnyAction> => {
  return (dispatch: ThunkDispatch<typeState, unknown, AnyAction>) => {
    dispatch(setLoading(true))
    return APIAuth.getUser()
      .then(({ data }) => {
        dispatch(setAuth(true))
        dispatch(setUser(data))
      })
      .catch(() => {
        dispatch(setAuth(false))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}

const setAuth = (isAuth: boolean) => ({ type: AuthActions.SetAuth, isAuth });
const setUser = (data: typeSignup) => ({ type: AuthActions.SetUser, data });
