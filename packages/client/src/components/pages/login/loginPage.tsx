import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'

import { ROUTS } from '../../../routs/routsList'
import { getFields, typeFormConfig } from '../../../helpers/getFields'

const FIELDS: typeFormConfig = {
  login: { label: 'логин', value: '' },
  password: { label: 'пароль', value: '' },
}

export const LoginPage: React.FC = () => {
  const isAuth = false // TODO: тут брать из редукса
  const navigate = useNavigate()

  const redirect = () => {
    navigate(ROUTS.REGISTER_PAGE)
  }

  const { initialValues, fields } = getFields(FIELDS)

  return (
    <div>
      {isAuth && <Navigate to={ROUTS.PROFILE_PAGE}></Navigate>}
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          console.log(values)
        }}>
        <Form>
          {fields}
          <button type="submit">войти</button>
        </Form>
      </Formik>
      <button onClick={redirect}>зарегестрироваться</button>
    </div>
  )
}
