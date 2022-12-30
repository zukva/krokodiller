import { createTheme, Theme } from '@mui/material'
import { Themes } from '../enums/themes'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
})

export const themes: Record<Themes, Theme> = {
  darkTheme,
  lightTheme,
}
