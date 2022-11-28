import { AuthActions, typeAuthAction } from '../actions/auth'

export const isAuth = (state = false, action: typeAuthAction) => {
  switch (action.type) {
    case AuthActions.SetAuth:
      return action.isAuth ?? state;
    default:
      return state;
  }
}
