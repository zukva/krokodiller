import { combineReducers } from 'redux';
import { image } from './image';
import { isAuth } from './auth';

export const reducers = combineReducers({
  image,
  isAuth,
});
