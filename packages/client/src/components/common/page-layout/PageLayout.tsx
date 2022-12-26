import React, { FC, PropsWithChildren } from 'react'
import { Box, Divider } from '@mui/material'

import ThemeSwitcher from '../theme-switcher'

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <Box
        sx={{
          height: '80px',
          display: 'flex',
          alignItems: 'center',
        }}>
        <ThemeSwitcher />
      </Box>
      <Divider />
      <Box>{children}</Box>
    </Box>
  )
}

export default PageLayout
