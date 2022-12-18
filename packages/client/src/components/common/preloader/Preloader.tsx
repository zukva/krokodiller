import React from 'react'

import { useAppSelector } from '../../../hooks/store'

export const Preloader: React.FC = () => {
  const isLoading = useAppSelector(state => state.isLoading)
  return isLoading ? <div className="preloader">загрузка...</div> : null
}
