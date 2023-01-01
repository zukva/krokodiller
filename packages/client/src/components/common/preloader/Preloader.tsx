import { Box, CircularProgress, NoSsr } from '@mui/material'

function Preloader() {
  return (
    <NoSsr>
      <Box
        sx={{
          display: 'flex',
          background: 'rgba(0, 0, 0, .9)',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 10000,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <CircularProgress color="inherit" />
      </Box>
    </NoSsr>
  )
}

export default Preloader
