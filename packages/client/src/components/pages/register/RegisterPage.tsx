import { Box, Typography } from '@mui/material'

import RegisterForm from './components/RegisterForm'
import { Link } from '../../common/link'
import { RoutesList } from '../../../routes/routesList'

const RegisterPage = () => {
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
          Регистрация
        </Typography>
        <RegisterForm />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Link to={RoutesList.LoginPage}>Войти</Link>
        </Box>
      </Box>
    </Box>
  )
}

export default RegisterPage
