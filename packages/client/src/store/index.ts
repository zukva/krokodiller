import { createStore } from 'redux';

import { reducers } from '../reducers'

export type typePoint = {
  x: number
  y: number
}
export type typeSegment = Array<typePoint>;
export type typeImage = Array<typeSegment>;

export type typeState = {
  image: typeImage
}

export const store = createStore(reducers);
