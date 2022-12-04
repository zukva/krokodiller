import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/rootReducer'

export const Preloader: React.FC = () => {
  const isLoading = useSelector((state: RootState) => state.isLoading)
  return isLoading ? <div className="preloader">загрузка...</div> : null
}
