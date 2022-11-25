import { ImageActions, typeImageAction } from '../actions/image'
import { typeImage, typePoint } from '../store';

const INITIAL_STATE: typeImage = [];

export const image = (state = INITIAL_STATE, action: typeImageAction) => {
  let res;
  const l = state.length;
  switch (action.type) {
    case ImageActions.AddPoint:
      res = [...state];
      res[l - 1].push(action.point as typePoint)
      return res;
    case ImageActions.AddSegment:
      res = [...state];
      res.push([action.point as typePoint]);
      return res;
    case ImageActions.RemoveSegment:
      return state.slice(0, l - 1);
    case ImageActions.SetImage:
      return [...action.image as typeImage];
    default:
      return state;
  }
}
