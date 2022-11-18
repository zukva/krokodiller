export enum ImageActions {
  AddPoint = 'addPoint',
  AddSegment = 'addSegment',
  RemoveSegment = 'removeSegment',
  SetImage = 'setImage',
}

export const addPoint = (point) => ({ type: ImageActions.AddPoint, point });
export const addSegment = (point) => ({ type: ImageActions.AddSegment, point });
export const removeSegment = () => ({ type: ImageActions.RemoveSegment });
export const setImage = (image) => ({ type: ImageActions.SetImage, image });
