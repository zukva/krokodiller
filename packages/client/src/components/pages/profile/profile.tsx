import React from 'react'

import { useAppSelector } from '../../../hooks/store'
import PageLayout from '../../common/page-layout'

export const ProfilePage: React.FC = () => {
  const user = useAppSelector(state => state.profile)

  return (
    <PageLayout>
      <div>
        {Object.entries?.(user)?.map(([key, value]) => {
          const res = `${key} : ${value}`
          return <div key={key}>{res}</div>
        })}
      </div>
    </PageLayout>
  )
}
