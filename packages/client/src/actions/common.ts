export enum CommonActions {
  SetLoading = 'setLoading',
}

export const setLoading = (isLoading: boolean) => ({ type: CommonActions.SetLoading, isLoading });
