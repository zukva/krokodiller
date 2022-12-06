// TODO: скорее всего это надо отнести в components/common рядом с инпутом
import React from 'react'
import { Field } from 'formik'

export type typeFormConfig = Record<string, { label: string; value: string }>

export const getFields = (cfg: typeFormConfig) => ({
  initialValues: Object.entries(cfg).reduce((prev, [key, value]) => {
    return { ...prev, [key]: value.value }
  }, {}),
  fields: Object.keys(cfg).map(key => {
    return <Field key={key} name={key}></Field>
  }),
})
