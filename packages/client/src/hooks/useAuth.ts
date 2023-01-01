import { useEffect } from 'react'
import { isEmpty } from 'lodash'
import { useLocation } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from './store'
import { authUser, authWithOAuth, userInfoSelector } from '../store/auth'

const useAuth = () => {
  const dispatch = useAppDispatch()
  const userInfo = useAppSelector(userInfoSelector)
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const code = params.get('code')

  useEffect(() => {
    if (code && isEmpty(userInfo)) {
      dispatch(authWithOAuth(code))
      return
    } else if (!isEmpty(userInfo)) {
      return
    }
    dispatch(authUser())
  }, [userInfo, code])
}

export default useAuth
