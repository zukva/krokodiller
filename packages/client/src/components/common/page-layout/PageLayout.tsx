import React, { FC, PropsWithChildren } from 'react'
import { Box, Container } from '@mui/material'

import Header from '../Header/header'

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <Header/>
      <Container
      sx={{
        flexGrow: 1,
        display: 'flex',
      }}
      >{children}</Container>
    </Box>
  )
}

export default PageLayout
