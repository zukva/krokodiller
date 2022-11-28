import APIAuth, { typeSignin, typeSignup } from '../api/APIAuth';
import { setLoading } from './common';

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

export const signin = (data: typeSignin) => {
  return (dispatch) => {
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

export const getUser = () => {
  return (dispatch) => {
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
