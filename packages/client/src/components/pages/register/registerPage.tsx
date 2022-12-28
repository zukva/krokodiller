import React from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { Container, Box, Typography, Button } from '@mui/material'

import { register } from '../login/authSlice'
import { TypeFormConfig, Form } from '../../common/form'
import { RoutesList } from '../../../routes/routesList'
import { useAppDispatch, useAppSelector } from '../../../hooks/store'
import {ApiTypes} from '../../../types'

const FIELDS: TypeFormConfig = {
  email: { label: 'почта', value: '' },
  login: { label: 'логин', value: '' },
  first_name: { label: 'имя', value: '' },
  second_name: { label: 'фамилия', value: '' },
  phone: { label: 'телефон', value: '' },
  password: { label: 'пароль', value: '' },
}

export const RegisterPage: React.FC = () => {
  const isAuth = useAppSelector(state => state.isAuth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const submit = (values: Record<string, string>) => {
    dispatch(register(values as ApiTypes.SignUpData))
  }

  const redirect = () => {
    navigate(RoutesList.LoginPage)
  }

  return (
    <Container maxWidth="sm">
      {isAuth && <Navigate to={RoutesList.ProfilePage}></Navigate>}
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
        <Typography>регистрация</Typography>
        <Form
          config={FIELDS}
          buttonLabel="зарегистрироваться"
          onSubmit={submit}></Form>
        <Button variant="text" onClick={redirect}>
          войти
        </Button>
      </Box>
    </Container>
  )
}
