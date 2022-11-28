import { AuthActions, typeUserAction } from '../actions/auth'

const INITIAL_STATE = {}

export const user = (state = INITIAL_STATE, action: typeUserAction) => {
  switch (action.type) {
    case AuthActions.SetUser:
      return action.data;
    default:
      return state;
  }
}
