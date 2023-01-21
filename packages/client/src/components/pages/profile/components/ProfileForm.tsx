import { useCallback, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Person } from '@mui/icons-material'
import { Avatar, Button, NoSsr } from '@mui/material'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import { useAppDispatch, useAppSelector } from '../../../../hooks/store'
import { changeProfile } from '../../../../store/profile'
import { logout, userInfoSelector } from '../../../../store/auth'
import AvatarModal from './AvatarModal'
import { DEV_BACKEND_PATH, PROD_BACKEND_PATH } from '../../../../config/api'

const backendPath = import.meta.env.PROD ? PROD_BACKEND_PATH : DEV_BACKEND_PATH

const validationSchema = yup.object({
  login: yup
    .string()
    .min(3, 'Логин не короче 3 символов')
    .required('Введите логин'),
  email: yup.string().email('Невалидный email').required('Введите email'),
  phone: yup.string().min(6, 'Невалидный номер').required('Введите телефон'),
})

const ProfileForm = () => {
  const dispatch = useAppDispatch()
  const userInfo = useAppSelector(userInfoSelector)
  const [openModal, setOpenModal] = useState(false)

  const handleToggleAvatarModal = useCallback(() => {
    setOpenModal(!openModal)
  }, [openModal])

  const formik = useFormik({
    initialValues: {
      login: '',
      email: '',
      phone: '',
      first_name: '',
      second_name: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      dispatch(
        changeProfile({
          ...values,
          display_name: 'unknown',
        })
      )
    },
  })

  useEffect(() => {
    if (!userInfo) {
      return
    }
    const { login = '', email = '', phone = '' } = userInfo
    formik.setValues({
      login,
      email,
      phone,
      first_name: 'player',
      second_name: 'unknown',
    })
  }, [userInfo])

  const handleLogout = useCallback(() => {
    dispatch(logout())
  }, [])

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
      <NoSsr>
        <AvatarModal
          open={openModal}
          handleToggleAvatarModal={handleToggleAvatarModal}
        />
      </NoSsr>
      <Avatar
        alt="Ваш аватар"
        color="action"
        sx={{
          mx: 'auto',
          mb: 6,
          width: 120,
          height: 120,
          cursor: 'pointer',
        }}
        src={userInfo?.avatar ? `${backendPath}/p-api/resources/${userInfo?.avatar}` : ''}
        onClick={handleToggleAvatarModal}>
        <Person fill="true" fontSize="large" />
      </Avatar>
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
        name="phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
      />
      <Button
        type="submit"
        size="large"
        color="success"
        variant="contained"
        sx={{ mt: 2 }}>
        Сохранить
      </Button>
      <Button
        onClick={handleLogout}
        type="button"
        size="large"
        color="error"
        variant="contained"
        sx={{ mt: 2 }}>
        Выйти
      </Button>
    </Box>
  )
}

export default ProfileForm
