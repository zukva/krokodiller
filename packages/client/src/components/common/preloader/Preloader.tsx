import { Box, CircularProgress } from '@mui/material'

import { useAppSelector } from '../../../hooks/store'
import { isAuthUserPendingSelector } from '../../../store/auth'

function Preloader() {
  const isAuthUserPending = useAppSelector(isAuthUserPendingSelector)

  return (
    <Box
      sx={{
        display: isAuthUserPending ? 'flex' : 'none',
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
  )
}

export default Preloader
