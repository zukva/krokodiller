import { CommonActions } from "../actions/common";

export const isLoading = (state = true, action) => {
  switch (action.type) {
    case CommonActions.SetLoading:
      return action.isLoading ?? state;
    default:
      return state;
  }
}
