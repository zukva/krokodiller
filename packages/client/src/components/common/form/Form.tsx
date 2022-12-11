import React, { FC } from 'react'
import { useFormik } from 'formik'
import { Container, TextField, Button } from '@mui/material'

import { IForm } from './types'

export const Form: FC<IForm> = ({ config, buttonLabel, onSubmit }) => {
  const { handleSubmit, handleChange, values } = useFormik<
    Record<string, string>
  >({
    initialValues: Object.entries(config).reduce(
      (prev, [key, { value }]) => ({ ...prev, [key]: value }),
      {}
    ),
    onSubmit,
  })

  return (
    <form onSubmit={handleSubmit}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '300px',
        }}>
        {Object.entries(config).map(([key, { label }]) => (
          <TextField
            fullWidth
            variant="standard"
            key={key}
            id={key}
            name={key}
            label={label}
            value={values[key]}
            onChange={handleChange}
          />
        ))}
        <Button type="submit" variant="contained">
          {buttonLabel}
        </Button>
      </Container>
    </form>
  )
}
