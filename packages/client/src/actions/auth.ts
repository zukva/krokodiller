import APIAuth, { typeSignin, typeSignup } from '../api/APIAuth';

export enum AuthActions {
  Signup = 'signup',
  SetAuth = 'setAuth',
  SetUser = 'setUser',
  Logout = 'logout'
}

export type typeAuthAction = {
  type: AuthActions,
  isAuth?: boolean,
}

export const signin = (data: typeSignin) => {
  return (dispatch) => {
    return APIAuth.signin(data)
      .then(({ data }) => {
        console.log(data);
        dispatch(setAuth(true))
      })
      .catch(() => {
        dispatch(setAuth(false))
      })
  }
}

export const getUser = () => {
  return (dispatch) => {
    return APIAuth.getUser()
      .then(({ data }) => {
        console.log(data);
        dispatch(setAuth(true))
        dispatch(setUser(data))
      })
      .catch(() => {
        dispatch(setAuth(false))
      })
  }
}

const setAuth = (isAuth: boolean) => ({ type: AuthActions.SetAuth, isAuth });
const setUser = (data: typeSignup) => ({ type: AuthActions.SetUser, data });
