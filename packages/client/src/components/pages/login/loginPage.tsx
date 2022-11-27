import React from 'react'
import { signin, getUser } from '../../../actions/auth'
import { useDispatch } from 'react-redux'

export const LoginPage: React.FC = () => {
  const dispatch = useDispatch()

  const clickLogin = () => {
    dispatch(signin({ login: 'Lolgin', password: 'parol' }))
  }

  const clickUser = () => {
    dispatch(getUser())
  }

  return (
    <div>
      login page
      <button onClick={clickLogin}>login</button>
      <button onClick={clickUser}>user</button>
    </div>
  )
}
