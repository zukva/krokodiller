import { Typography } from '@mui/material'
import React from 'react'

const AnswerToComment: React.FC<{
  author: any
  body: string
  commentId?: string | number
  closeAnswerBlock?: () => void
}> = ({ author, body, closeAnswerBlock, commentId }) => {
  return (
    <Typography
      component={'span'}
      sx={{
        backgroundColor: 'lightgray',
        borderLeft: '4px solid lightblue',
      }}>
      author comment --- {author?.nickname}
      body to answer comment --- {body}
      comment id ==== {commentId}
      <br />
      <button onClick={closeAnswerBlock}>x</button>
    </Typography>
  )
}

export default AnswerToComment
