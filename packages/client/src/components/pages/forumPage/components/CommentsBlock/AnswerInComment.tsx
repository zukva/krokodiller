import { Box, Typography } from '@mui/material'
import React from 'react'

const AnswerInComment: React.FC<{
  author: any
  body: string
  commentId?: string | number
}> = ({ author, body }) => {
  return (
    <Box
      component={'span'}
      sx={{
        backgroundColor: 'lightgray',
        borderLeft: '4px solid lightblue',
        display: 'block',
      }}>
      <Typography component={'span'}>{author}</Typography>
      <br />
      <Typography component={'span'}>{body}</Typography>
    </Box>
  )
}

export default AnswerInComment
