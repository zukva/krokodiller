import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { ROUTS } from '../routs/routsList'
import { useSelector } from 'react-redux'

type typeProtectedRout = {
  children: JSX.Element
}

const ProtectedRoute: React.FC<typeProtectedRout> = ({ children }) => {
  const isAuth = useSelector(state => state.isAuth)

  if (!isAuth) {
    return <Navigate to={ROUTS.LOGIN_PAGE} replace={true} />
  }

  return children
}

export default ProtectedRoute
