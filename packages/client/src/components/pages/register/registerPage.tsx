import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Navigate } from 'react-router-dom'
import { Container, Box, Typography, Button } from '@mui/material'

import { register } from '../login/authSlice'
import { typeFormConfig, Form } from '../../common/form'
import { typeSignup } from '../../../api/APIAuth'
import { RootState } from '../../../store/rootReducer'
import { AppDispatch } from '../../../store'
import { ROUTS } from '../../../routs/routsList'
import { Header } from '../../Header/Header'

const FIELDS: typeFormConfig = {
  email: { label: 'почта', value: '' },
  login: { label: 'логин', value: '' },
  first_name: { label: 'имя', value: '' },
  second_name: { label: 'фамилия', value: '' },
  phone: { label: 'телефон', value: '' },
  password: { label: 'пароль', value: '' },
}

export const RegisterPage: React.FC = () => {
  const isAuth = useSelector((state: RootState) => state.isAuth)
  const dispatch = useDispatch<AppDispatch>()
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
          buttonLabel="зарегестрироваться"
          onSubmit={submit}></Form>
        <Button variant="text" onClick={redirect}>
          войти
        </Button>
      </Box>
    </Container>
  )
}
