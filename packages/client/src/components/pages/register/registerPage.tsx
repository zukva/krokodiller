import React from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { Container, Box, Typography, Button } from '@mui/material'

import { register } from '../login/authSlice'
import { TypeFormConfig, Form } from '../../common/form'
import { typeSignup } from '../../../api/APIAuth'
import { ROUTS } from '../../../routs/routsList'
import { useAppDispatch, useAppSelector } from '../../../hooks/store'
import { Header } from '../../Header/Header'

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
    dispatch(register(values as typeSignup))
  }

  const redirect = () => {
    navigate(ROUTS.LOGIN_PAGE)
  }

  return (
    <Container maxWidth="sm">
      <Header />
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
