import { typePoint, typeImage } from "../store";

export enum ImageActions {
  AddPoint = 'addPoint',
  AddSegment = 'addSegment',
  RemoveSegment = 'removeSegment',
  SetImage = 'setImage',
}
export type typeImageAction = {
  type: ImageActions
  point?: typePoint
  image?: typeImage
}

export const addPoint = (point: typePoint) => ({ type: ImageActions.AddPoint, point });
export const addSegment = (point: typePoint) => ({ type: ImageActions.AddSegment, point });
export const removeSegment = () => ({ type: ImageActions.RemoveSegment });
export const setImage = (image: typeImage) => ({ type: ImageActions.SetImage, image });
