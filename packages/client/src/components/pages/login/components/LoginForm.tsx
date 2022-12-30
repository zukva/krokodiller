import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { useAppDispatch } from '../../../../hooks/store'
import { signInUser } from '../../../../store/auth'

const validationSchema = yup.object({
  login: yup
    .string()
    .min(3, 'Логин не короче 3 символов')
    .required('Введите логин'),
  password: yup
    .string()
    .min(6, 'Пароль не короче 6 символов')
    .required('Введите пароль'),
})

const LoginForm = () => {
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      dispatch(signInUser(values))
    },
  })

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        width: '500px',
      }}
      autoComplete="off"
      onSubmit={formik.handleSubmit}>
      <TextField
        label="Логин"
        size="medium"
        sx={{ mb: 2 }}
        name="login"
        value={formik.values.login}
        onChange={formik.handleChange}
        error={formik.touched.login && Boolean(formik.errors.login)}
        helperText={formik.touched.login && formik.errors.login}
      />
      <TextField
        label="Пароль"
        size="medium"
        sx={{ mb: 2 }}
        type="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button
        type="submit"
        size="large"
        color="success"
        variant="contained"
        sx={{ my: 2 }}>
        Войти
      </Button>
    </Box>
  )
}

export default LoginForm
