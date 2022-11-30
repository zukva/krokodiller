export enum CommonActions {
  SetLoading = 'setLoading',
}
export type typeLoadingAction = {
  type: CommonActions.SetLoading,
  isLoading: boolean,
}

export const setLoading = (isLoading: boolean) => ({ type: CommonActions.SetLoading, isLoading });
