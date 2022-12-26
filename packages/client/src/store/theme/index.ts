import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../index'
import { Themes } from '../../enums/themes'
import ThemeAPI from '../../api/ThemeAPI'
import getUserDevice from '../../utils/getUserDevice'

type ThemeState = {
  name: Themes
}

const initialState = {
  name: Themes.LightTheme,
} as ThemeState

export const setUserTheme = createAsyncThunk(
  'theme/setUserTheme',
  async (theme: Themes, { dispatch, getState }) => {
    const state = getState() as RootState

    dispatch(setTheme(theme))

    const { id } = state.profile

    const data = {
      userId: id,
      theme,
      device: getUserDevice(),
    }

    try {
      await ThemeAPI.setUserTheme(data)
    } catch (err) {
      console.log(err)
    }
  }
)

export const getUserTheme = createAsyncThunk(
  'theme/getUserTheme',
  async (_, { dispatch, getState }) => {
    const state = getState() as RootState

    const { id } = state.profile

    const data = {
      userId: id,
      device: getUserDevice(),
    }

    try {
      const { theme } = await ThemeAPI.getUserTheme(data)
      dispatch(setTheme(theme));
    } catch (err) {
      console.log(err)
    }
  }
)

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Themes>) => {
      state.name = action.payload
    },
  },
})

export const themeSelector = (state: RootState) => state.theme.name

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
