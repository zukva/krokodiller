import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useAppDispatch } from '../../../../hooks/store'
import { changePassword } from '../../../../store/profile'

const validationSchema = yup.object({
  oldPassword: yup.string().required('Введите старый пароль'),
  password: yup
    .string()
    .min(6, 'Пароль не короче 6 символов')
    .required('Введите новый пароль'),
  passwordConfirmation: yup
    .string()
    .required('Подтвердите пароль')
    .test('passwords-match', 'Повторите новый пароль', function (value) {
      return this.parent.password === value
    }),
})

const SecurityForm = () => {
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(
        changePassword({
          newPassword: values.password,
          oldPassword: values.oldPassword,
        })
      )
      resetForm()
    },
  })

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
      }}
      autoComplete="off"
      onSubmit={formik.handleSubmit}>
      <TextField
        label="Старый пароль"
        size="medium"
        sx={{ mb: 2 }}
        name="oldPassword"
        type="password"
        value={formik.values.oldPassword}
        onChange={formik.handleChange}
        error={formik.touched.oldPassword && Boolean(formik.errors.oldPassword)}
        helperText={formik.touched.oldPassword && formik.errors.oldPassword}
      />

      <TextField
        label="Новый пароль"
        size="medium"
        sx={{ mb: 2 }}
        name="password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />

      <TextField
        label="Повторите новый пароль"
        size="medium"
        sx={{ mb: 2 }}
        name="passwordConfirmation"
        type="password"
        value={formik.values.passwordConfirmation}
        onChange={formik.handleChange}
        error={
          formik.touched.passwordConfirmation &&
          Boolean(formik.errors.passwordConfirmation)
        }
        helperText={
          formik.touched.passwordConfirmation &&
          formik.errors.passwordConfirmation
        }
      />
      <Button
        type="submit"
        size="large"
        color="success"
        variant="contained"
        sx={{ mt: 2 }}>
        Сохранить
      </Button>
    </Box>
  )
}

export default SecurityForm
