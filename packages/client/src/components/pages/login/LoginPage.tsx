import { Box, Typography } from '@mui/material'
import { RoutesList } from '../../../routes/routesList'

import { Link } from '../../common/link'
import LoginForm from './components/LoginForm'
import { FC } from 'react'

const LoginPage: FC = () => {
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
          boxShadow: 1,
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
