import React from 'react'
import { useDispatch } from 'react-redux'

import { signin } from '../../../actions/auth'

export const LoginPage: React.FC = () => {
  const dispatch = useDispatch()

  const clickLogin = () => {
    dispatch(signin({ login: 'Lolgin', password: 'parol' })); // TODO: собирать данные из формы TEA2-14
  }

  return (
    <div>
      login page
      <button onClick={clickLogin}>login</button>
    </div>
  )
}
