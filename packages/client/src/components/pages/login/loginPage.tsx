import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Button, Container, Box, Typography } from '@mui/material'
import { RoutesList } from '../../../routes/routesList'

import { Form, TypeFormConfig } from '../../common/form'
import { login } from './authSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks/store'
import {ApiTypes} from '../../../types'

const FIELDS: TypeFormConfig = {
  login: { label: 'логин', value: '' },
  password: { label: 'пароль', value: '' },
}

export const LoginPage: React.FC = () => {
  const isAuth = useAppSelector(state => state.isAuth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const submit = (values: Record<string, string>) => {
    dispatch(login(values as ApiTypes.SignInData))
  }

  const redirect = () => {
    navigate(RoutesList.RegisterPage)
  }

  return (
    <Container maxWidth="sm">
      {isAuth && <Navigate to={RoutesList.ProfilePage} />}
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
