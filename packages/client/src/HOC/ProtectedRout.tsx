import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ROUTS } from '../routs/routsList'
import { RootState } from '../store'

type typeProtectedRout = {
  children: JSX.Element
}

const ProtectedRoute: React.FC<typeProtectedRout> = ({ children }) => {
  const navigate = useNavigate()
  const { isAuth, isLoading } = useSelector((state: RootState) => ({
    isAuth: state.isAuth,
    isLoading: state.isLoading,
  }))

  useEffect(() => {
    if (!isLoading && !isAuth) {
      navigate(ROUTS.LOGIN_PAGE)
    }
  }, [isLoading, isAuth])

  return isLoading ? null : children
}

export default ProtectedRoute
