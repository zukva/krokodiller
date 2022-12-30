import { Box, Button, Input, Modal } from '@mui/material'
import { ChangeEvent, FC, useCallback } from 'react'
import { useFormik } from 'formik'
import { useAppDispatch } from '../../../../hooks/store'
import { changeAvatar } from '../../../../store/profile'

type Props = {
  open: boolean
  handleToggleAvatarModal: () => void
}
const AvatarModal: FC<Props> = ({ open, handleToggleAvatarModal }) => {
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      avatar: new Blob(),
    },
    onSubmit: values => {
      if (!values) {
        return
      }

      const formData = new FormData()
      formData.append('avatar', values.avatar)
      dispatch(changeAvatar(formData))
      handleToggleAvatarModal?.()
    },
  })

  const handleAvatarChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      formik.setFieldValue('avatar', event?.currentTarget?.files?.[0])
    },
    []
  )

  return (
    <Modal
      open={open}
      onClose={handleToggleAvatarModal}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Box
        component="form"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '500px',
          height: '200px',
          flexDirection: 'column',
          borderRadius: '8px',
          backgroundColor: 'rgba(255,255,255,.9)',
        }}
        autoComplete="off"
        onSubmit={formik.handleSubmit}>
        <Input
          type="file"
          sx={{ width: '300px' }}
          name="avatar"
          onChange={handleAvatarChange}
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
    </Modal>
  )
}

export default AvatarModal
