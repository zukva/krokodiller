import { combineReducers } from '@reduxjs/toolkit'

import isAuth from '../components/pages/login/authSlice';
import isLoading from '../components/common/preloader/loadingSlice';
import profile from '../components/pages/profile/profileSlice'
import image from '../components/pages/gamePage/elements/CanvasHolder/imageSlice'
import chat from '../components/pages/gamePage/chatSlice'

const rootReducer = combineReducers({
  isLoading,
  isAuth,
  profile,
  image,
  chat,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
