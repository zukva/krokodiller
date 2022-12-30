import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppDispatch, RootState } from '../index'
import { Themes } from '../../enums/themes'
import ThemeAPI from '../../api/ThemeAPI'
import getUserDevice from '../../utils/getUserDevice'
import { createAppAsyncThunk } from '../utils'

type ThemeState = {
  name: Themes
}

const initialState = {
  name: Themes.LightTheme,
} as ThemeState

export const setUserTheme = createAppAsyncThunk(
  'theme/setUserTheme',
  async (theme: Themes, { dispatch, getState }) => {
    const state = getState()

    dispatch(setTheme(theme))

    const id = state.auth?.userInfo?.id

    if (!id) {
      return
    }

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

export const getUserTheme = createAppAsyncThunk(
  'theme/getUserTheme',
  async (_, { dispatch, getState }) => {
    const state = getState()

    const id = state.auth?.userInfo?.id

    if (!id) {
      return
    }

    const data = {
      userId: id,
      device: getUserDevice(),
    }

    try {
      const { theme } = await ThemeAPI.getUserTheme(data)
      dispatch(setTheme(theme))
    } catch (err) {
      console.log(err)
    }
  }
)

export const setInitialTheme = () => (dispatch: AppDispatch) => {
  const isSystemDarkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  dispatch(setTheme(isSystemDarkMode ? Themes.DarkTheme : Themes.LightTheme))
}

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
