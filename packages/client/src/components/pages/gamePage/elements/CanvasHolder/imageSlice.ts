import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

export type typePoint = {
  x: number,
  y: number,
}
export type typeSegment = typePoint[];
export type typeImage = typeSegment[];

const initialState = [] as typeImage;

export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    addPoint(state: typeImage, action: PayloadAction<typePoint>) {
      const l = state.length;
      state[l - 1].push(action.payload);
    },
    addSegment(state: typeImage, action: PayloadAction<typePoint>) {
      state.push([action.payload]);
    }
  }
});

export const { addPoint, addSegment } = imageSlice.actions;
export default imageSlice.reducer;
