import React from 'react'
import { useSelector } from 'react-redux'

import { typeState } from '../../../store'

export const Preloader: React.FC = () => {
  const isLoading = useSelector((state: typeState) => state.isLoading)
  return isLoading ? <div className="preloader">загрузка...</div> : null
}
