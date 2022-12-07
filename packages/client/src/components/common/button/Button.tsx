import React, { FC } from 'react'
import { Container } from './styled'

export const Button:FC = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}
