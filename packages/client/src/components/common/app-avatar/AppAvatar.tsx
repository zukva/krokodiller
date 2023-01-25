import React, {FC} from 'react'
import Avatar, {AvatarProps} from '@mui/material/Avatar'

import { DEV_BACKEND_PATH, PROD_BACKEND_PATH } from '../../../config/api'

type Props = AvatarProps;

const backendPath = import.meta.env.PROD ? PROD_BACKEND_PATH : DEV_BACKEND_PATH

const AppAvatar: FC<Props> = ({src, children, ...restProps}) => {
  return (
    <Avatar
      {...restProps}
      src={src ? `${backendPath}/p-api/resources/${src}` : ''}
    >
      {children}
    </Avatar>
  )
}

export default AppAvatar
