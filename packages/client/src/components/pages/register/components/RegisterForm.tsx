import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useAppDispatch } from '../../../../hooks/store'
import { signUpUser } from '../../../../store/auth'

const validationSchema = yup.object({
  login: yup
    .string()
    .min(3, 'Логин не короче 3 символов')
    .required('Введите логин'),
  email: yup.string().email('Невалидный email').required('Введите email'),
  phone: yup.string().min(6, 'Невалидный номер').required('Введите телефон'),
  password: yup
    .string()
    .min(6, 'Пароль не короче 6 символов')
    .required('Введите пароль'),
})

const RegistrationForm = () => {
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      login: '',
      email: '',
      phone: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      dispatch(
        signUpUser({
          ...values,
          second_name: 'unknown',
          first_name: 'player',
        })
      )
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
        label="E-mail"
        size="medium"
        sx={{ mb: 2 }}
        type="text"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        label="Телефон"
        size="medium"
        sx={{ mb: 2 }}
        type="text"
        name="phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
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
        sx={{ mb: 2 }}>
        Зарегистрироваться
      </Button>
    </Box>
  )
}

export default RegistrationForm
