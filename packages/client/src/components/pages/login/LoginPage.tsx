import { Box, Button, Typography } from '@mui/material'
import { RoutesList } from '../../../routes/routesList'

import { Link } from '../../common/link'
import LoginForm from './components/LoginForm'
import { FC, useCallback } from 'react'
import { useAppDispatch } from '../../../hooks/store'
import { oAuthSignIn } from '../../../store/auth'

const LoginPage: FC = () => {
  const dispatch = useAppDispatch()
  const handleYandexAuth = useCallback(() => {
    dispatch(oAuthSignIn())
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>
      <Box
        sx={{
          boxShadow: 2,
          borderRadius: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: '30px',
          width: '700px',
        }}>
        <Typography
          component="h1"
          variant="h3"
          sx={{ textAlign: 'center', mb: 2 }}>
          Вход
        </Typography>
        <LoginForm />
        <Typography>или войти с помощью</Typography>
        <Button
          sx={{ my: 2, width: '500px', background: '#000' }}
          variant="contained"
          size="large"
          onClick={handleYandexAuth}>
          Войти с Яндекс ID
        </Button>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Link to={RoutesList.RegisterPage}>
            Нет аккаунта? Зарегистрироваться
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default LoginPage
