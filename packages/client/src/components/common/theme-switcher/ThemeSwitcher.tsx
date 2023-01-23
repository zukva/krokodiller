import React, { useCallback } from 'react'
import { Box, Switch } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../hooks/store'
import { setUserTheme, themeSelector } from '../../../store/theme'
import { Themes } from '../../../enums/themes'

const ThemeSwitcher = () => {
  const theme = useAppSelector(themeSelector)
  const dispatch = useAppDispatch()

  const handleChange = useCallback(() => {
    dispatch(
      setUserTheme(
        theme === Themes.LightTheme ? Themes.DarkTheme : Themes.LightTheme
      )
    )
  }, [theme])

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: '20px',
      }}>
      <span>light</span>
      <Switch onChange={handleChange} checked={theme === Themes.DarkTheme} />
      <span>dark</span>
    </Box>
  )
}

export default ThemeSwitcher
