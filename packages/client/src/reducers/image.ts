import { ImageActions } from '../actions/image'

const INITIAL_STATE = [];

export const image = (state = INITIAL_STATE, action) => {
  let res;
  const l = state.length;
  switch (action.type) {
    case ImageActions.AddPoint:
      res = [...state];
      res[l - 1].push(action.point)
      return res;
    case ImageActions.AddSegment:
      res = [...state];
      res.push([action.point]);
      return res;
    case ImageActions.RemoveSegment:
      return state.slice(0, l - 1);
    case ImageActions.SetImage:
      return [...action.image];
    default:
      return state;
  }
}
