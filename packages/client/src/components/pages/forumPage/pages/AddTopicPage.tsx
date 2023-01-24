import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { Box } from '@mui/system'
import ChooseTopicTheme from '../components/ChooseTopicTheme'
import { useNavigate } from 'react-router-dom'

import { create, TopicType } from '../../../../store/forum'
import { useAppDispatch } from '../../../../hooks/store'
import PageLayout from '../../../common/page-layout/PageLayout'

const AddTopicPage = () => {
  const [titleValue, setTitleValue] = useState('')
  const [contentValue, setContentValue] = useState('')
  const [themeValue, setThemeValue] = useState('Игра')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const getTopicTheme = (value: string) => {
    setThemeValue(value)
  }

  const getTopicValues = () => {
    if (titleValue && contentValue) {
      const newTopic: TopicType = {
        id: `mokId-${titleValue}`,
        titleTopic: titleValue,
        bodyTopic: contentValue,
        tag: themeValue,
        author: { nickname: 'boon' },
        comments: [],
      }

      dispatch(create(newTopic))
      navigate('/forum')
    }
  }
  return (
    <PageLayout>
      <Paper
        sx={{
          padding: '30px',
          maxWidth: '527px',
          m: '20px auto',
        }}>
        <TextField
          placeholder="Название темы топика"
          fullWidth
          value={titleValue}
          onChange={e => setTitleValue(e.target.value)}
        />
        <Box sx={{ m: '20px 0' }}>
          <TextField
            id="outlined-multiline-flexible"
            label="Описание топика"
            multiline
            maxRows={4}
            fullWidth
            value={contentValue}
            onChange={e => setContentValue(e.target.value)}
          />
        </Box>
        <Box>
          <ChooseTopicTheme changeTheme={getTopicTheme} />
        </Box>
        <Box
          sx={{
            m: '10px 0',
          }}>
          <Button variant="contained" onClick={getTopicValues}>
            Создать
          </Button>
        </Box>
      </Paper>
    </PageLayout>
  )
}

export default AddTopicPage
