import { combineReducers } from 'redux';
import { image } from './image';
import { isAuth } from './auth';
import { user } from './user';
import { isLoading } from './loading';

export const reducers = combineReducers({
  isLoading,
  isAuth,
  user,
  image,
});
