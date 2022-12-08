import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/rootReducer'
import { typeProfileState } from './profileSlice'

export const ProfilePage: React.FC = () => {
  const user = useSelector(
    (state: RootState) => state.profile
  ) as typeProfileState

  return (
    <div>
      {Object.entries(user).map(([key, value]) => {
        const res = `${key} : ${value}`
        return <div key={key}>{res}</div>
      })}
    </div>
  )
}
