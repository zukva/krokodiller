import React, { useCallback, useEffect } from 'react'
import { Alert } from '@mui/material'

import { useAppDispatch, useAppSelector } from '../../../hooks/store'
import { alertSelector, setAlertError } from '../../../store/alert'

function AppAlert() {
  const dispatch = useAppDispatch()
  const { message, severity } = useAppSelector(alertSelector)
  const handleClose = useCallback(() => {
    dispatch(setAlertError(''))
  }, [dispatch])

  useEffect(() => {
    const timerId = setTimeout(() => handleClose(), 5000)
    return () => clearTimeout(timerId)
  }, [handleClose, message])

  if (!message || message?.length < 1) {
    return null
  }

  return (
    <Alert
      onClose={handleClose}
      severity={severity}
      variant="filled"
      sx={{
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 9900,
      }}>
      {message}
    </Alert>
  )
}

export default AppAlert
