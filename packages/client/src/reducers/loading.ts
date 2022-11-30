import { CommonActions, typeLoadingAction } from "../actions/common";

export const isLoading = (state = true, action: typeLoadingAction) => {
  switch (action.type) {
    case CommonActions.SetLoading:
      return action.isLoading ?? state;
    default:
      return state;
  }
}
