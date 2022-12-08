import { Navigate, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/rootReducer'
import { ROUTS } from '../../../routs/routsList'
import { PageContainer, Plate } from '../../../styled'

import { Label } from '../../common/label'
import { Form, typeFormConfig } from '../../common/form'

const FIELDS: typeFormConfig = {
  login: { label: 'логин', value: '' },
  password: { label: 'пароль', value: '' },
}

export const LoginPage: React.FC = () => {
  const isAuth = useSelector((state: RootState) => state.isAuth)
  const navigate = useNavigate()
// БЛДЖАААААД!!1 тип в другой ветке =(((
  const submit = values => {
    console.log(values)
  }

  const redirect = () => {
    navigate(ROUTS.REGISTER_PAGE)
  }

  return (
    <PageContainer>
      {isAuth && <Navigate to={ROUTS.PROFILE_PAGE}></Navigate>}
      <Plate>
        <Label size="l">вход</Label>
        <Form config={FIELDS} buttonLabel="войти" onSubmit={submit}></Form>
        <button onClick={redirect}>зарегестрироваться</button>
      </Plate>
    </PageContainer>
  )
}
