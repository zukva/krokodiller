import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RoutesList } from '../routes/routesList'
import { RootState } from '../store'

type TypeProtectedRoute = {
  children: JSX.Element
}

const ProtectedRoute: React.FC<TypeProtectedRoute> = ({ children }) => {
  const navigate = useNavigate()
  const { isAuth, isLoading } = useSelector((state: RootState) => ({
    isAuth: state.isAuth,
    isLoading: state.isLoading,
  }))

  useEffect(() => {
    if (!isLoading && !isAuth) {
      navigate(RoutesList.LoginPage)
    }
  }, [isLoading, isAuth])

  return isLoading ? null : children
}

export default ProtectedRoute
