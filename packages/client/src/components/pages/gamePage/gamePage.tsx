import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '../../../store'
import { getToken } from './chatSlice'
import { CanvasHolder } from './elements/CanvasHolder'

export const CHAT_ID = '3930';

export const GamePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getToken(CHAT_ID))
  }, [])

  return (
    <div>
      тут сама игра
      <CanvasHolder />
    </div>
  )
}
