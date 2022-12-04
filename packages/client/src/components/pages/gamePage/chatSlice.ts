import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

import { AppThunk, AppDispatch } from '../../../store';
import { setIsLoading } from '../../common/preloader/loadingSlice';
import APIChat from '../../../api/APIChat';

export type typeChatState = {
  token: string;
}

const initialState = {} as typeChatState;

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setToken(state: typeChatState, action: PayloadAction<string>) {
      state.token = action.payload;
    }
  }
});

export const getToken = (id: string): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true));
    return APIChat.getToken(id)
      .then(({ data }) => {
        const { token } = data;
        dispatch(setToken(token));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      })
  }

export const { setToken } = chatSlice.actions;
export default chatSlice.reducer;
