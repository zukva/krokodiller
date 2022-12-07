import React, { FC } from 'react'
import { Formik, Form as FormikForm, Field } from 'formik'

import { Button } from '../button'

import { Container } from './styled'
import { typeFormConfig, IForm } from './types'

import { FieldInput } from './elements/fieldInput'

const getFields = (cfg: typeFormConfig) => ({
  initialValues: Object.entries(cfg).reduce((prev, [key, value]) => {
    return { ...prev, [key]: value.value }
  }, {}),
  fields: Object.keys(cfg).map(key => {
    return <FieldInput key={key} name={key} />
  }),
})

export const Form: FC<IForm> = ({ config, buttonLabel, onSubmit }) => {
  const { initialValues, fields } = getFields(config)

  return (
    <Formik initialValues={initialValues} onSubmit={values => onSubmit(values)}>
      <FormikForm>
        <Container>
          {fields}
          <Button type="submit">{buttonLabel}</Button>
        </Container>
      </FormikForm>
    </Formik>
  )
}
