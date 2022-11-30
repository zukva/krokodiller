import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import { reducers } from '../reducers'
import { typeSignup } from '../api/APIAuth';

export type typePoint = {
  x: number
  y: number
}
export type typeSegment = Array<typePoint>;
export type typeImage = Array<typeSegment>;

export type typeState = {
  isLoading: boolean,
  isAuth: boolean,
  user: typeSignup,
  image: typeImage
}

export type AppDispatch = typeof store.dispatch;

export const store = createStore(reducers, applyMiddleware(thunk));
