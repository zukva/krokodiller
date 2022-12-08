import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch } from '../../../store'
import { RootState } from '../../../store/rootReducer'
import { login } from './authSlice'

export const LoginPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const isAuth = useSelector((state: RootState) => state.isAuth)

  useEffect(() => {
    console.log(isAuth)
  }, [isAuth])

  const clickLogin = () => {
    dispatch(login({ login: 'Lolgin', password: 'parol' }))
  }

  return (
    <div>
      login page
      <button onClick={clickLogin}>login</button>
    </div>
  )
}
