import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { ROUTS } from '../routs/routsList'
import { RootState } from '../store/rootReducer'

type typeProtectedRout = {
  children: JSX.Element
}

const ProtectedRoute: React.FC<typeProtectedRout> = ({ children }) => {
  const { isAuth, isLoading } = useSelector((state: RootState) => ({
    isAuth: state.isAuth,
    isLoading: state.isLoading,
  }))

  if (!isAuth && !isLoading) {
    return <Navigate to={ROUTS.LOGIN_PAGE} replace={true} />
  }

  return children
}

export default ProtectedRoute
