import React from 'react'

import { useAppSelector } from '../../../hooks/store'

export const ProfilePage: React.FC = () => {
  const user = useAppSelector(state => state.profile)

  return (
    <div>
      {Object.entries?.(user)?.map(([key, value]) => {
        const res = `${key} : ${value}`
        return <div key={key}>{res}</div>
      })}
    </div>
  )
}
