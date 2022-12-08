import React, { FC } from 'react'
import { useField, FieldHookConfig } from 'formik'

import { Container, Input } from './styled'

export const FieldInput: FC<FieldHookConfig<string>> = ({ ...props }) => {
  const [field] = useField(props.name)

  return (
    <Container>
      <Input {...field} {...props} />
    </Container>
  )
}