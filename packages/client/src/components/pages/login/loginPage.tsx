import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Button, Container, Box, Typography } from '@mui/material'
import { ROUTS } from '../../../routs/routsList'

import { Form, TypeFormConfig } from '../../common/form'
import { login } from './authSlice'
import { typeSignin } from '../../../api/APIAuth'
import { useAppDispatch, useAppSelector } from '../../../hooks/store'

const FIELDS: TypeFormConfig = {
  login: { label: 'логин', value: '' },
  password: { label: 'пароль', value: '' },
}

export const LoginPage: React.FC = () => {
  const isAuth = useAppSelector(state => state.isAuth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const submit = (values: Record<string, string>) => {
    dispatch(login(values as typeSignin))
  }

  const redirect = () => {
    navigate(ROUTS.REGISTER_PAGE)
  }

  return (
    <Container maxWidth="sm">
      {isAuth && <Navigate to={ROUTS.PROFILE_PAGE}></Navigate>}
      <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Typography>вход</Typography>
        <Form config={FIELDS} buttonLabel="войти" onSubmit={submit}></Form>
        <Button variant="text" onClick={redirect}>
          зарегистрироваться
        </Button>
      </Box>
    </Container>
  )
}
