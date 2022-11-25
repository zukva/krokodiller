import React from 'react';
import { Navigate} from 'react-router-dom'
import { ROUTS } from '../routs/routsList'

type typeProtectedRout = {
  isAuth: boolean
  children: JSX.Element
}

const ProtectedRoute:React.FC<typeProtectedRout> = ({
                          isAuth,
                          children,
                        }) => {

  if (!isAuth) {

    return <Navigate to={ROUTS.LOGIN_PAGE} replace={true}/>
  }

  return children;
}

export default ProtectedRoute;
