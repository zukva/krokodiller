import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container, Box, Typography } from '@mui/material'
import { RootState } from '../../../store/rootReducer'
import { ROUTS } from '../../../routs/routsList'

import { Form, typeFormConfig } from '../../common/form'
import { AppDispatch } from '../../../store'
import { login } from './authSlice'
import { typeSignin } from '../../../api/APIAuth'

const FIELDS: typeFormConfig = {
  login: { label: 'логин', value: '' },
  password: { label: 'пароль', value: '' },
}

export const LoginPage: React.FC = () => {
  const isAuth = useSelector((state: RootState) => state.isAuth)
  const dispatch = useDispatch<AppDispatch>()
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
          зарегестрироваться
        </Button>
      </Box>
    </Container>
  )
}
