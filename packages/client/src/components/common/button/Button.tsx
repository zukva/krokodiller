import React, { FC } from 'react'

import { IButtonProps } from './types'
import { Container } from './styled'

export const Button: FC<IButtonProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}
