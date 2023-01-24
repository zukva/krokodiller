import { Box, Typography } from '@mui/material'
import React from 'react'

const AnswerToComment: React.FC<{
  author: any
  body: string
  commentId?: string | number
  closeAnswerBlock?: () => void
}> = ({ author, body, closeAnswerBlock, commentId }) => {
  return (
    <Box
      component={'span'}
      sx={{
        backgroundColor: 'lightgray',
        borderLeft: '4px solid lightblue',
        display: 'block',
      }}>
      <Typography>{author?.nickname}</Typography>
      <Typography>{body}</Typography>
      <button onClick={closeAnswerBlock}>x</button>
    </Box>
  )
}

export default AnswerToComment
