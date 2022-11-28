import React from 'react'
import { useSelector } from 'react-redux'

import { typeState } from '../../../store'

export const ProfilePage: React.FC = () => {
  const user = useSelector((state: typeState) => state.user)

  return (
    <div>
      {Object.entries(user).map(([key, value]) => {
        const res = `${key} : ${value}`
        return <div key={key}>{res}</div>
      })}
    </div>
  )
}
