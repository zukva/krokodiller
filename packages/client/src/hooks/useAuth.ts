import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from './store'
import { authUser, userInfoSelector } from '../store/auth'

const useAuth = () => {
  const dispatch = useAppDispatch()
  const userInfo = useAppSelector(userInfoSelector)

  useEffect(() => {
    if (userInfo) {
      return
    }
    dispatch(authUser())
  }, [])
}

export default useAuth
