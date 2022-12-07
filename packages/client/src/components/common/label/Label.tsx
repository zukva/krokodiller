import React, { FC } from 'react'

import { LabelProps } from './types'
import { Container } from './styled'

export const Label: FC<LabelProps> = ({ children, size = 'm' }) => {
  return <Container size={size}>{children}</Container>
}
