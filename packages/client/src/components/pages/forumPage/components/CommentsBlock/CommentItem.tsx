import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { CommentType } from '../../../../../store/forum'
import AnswerInComment from './AnswerInComment'
import AnswerToComment from './AnswerToComment'

type CommentItemType = CommentType & { test: (data: any) => void }

const CommentItem: React.FC<CommentItemType> = ({
  id,
  body,
  author,
  parentId,
  answerComment,
  date,
  test,
}) => {
  const [reactionsCount, setReactionsCount] = useState(0)
  return (
    <>
      <ListItem
        sx={{
          borderRadius: '8px',
          m: '10px 0',
          boxShadow: '0 0 24px rgba(0, 0, 0, .11)',
        }}>
        <ListItemAvatar>
          <Avatar>T</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={author ? author.nickname : 'unknown'}
          secondary={
            <>
              <Typography
                variant="subtitle2"
                component={'span'}
                sx={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}>
                {!answerComment ? (
                  ''
                ) : (
                  <AnswerInComment
                    author={answerComment.author.nickname}
                    body={answerComment.body}
                  />
                )}

                {body ? body : 'no body'}
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider />
      reactions |
      <span>
        <button
          style={{border: 'none', background: 'transparent'}}
          onClick={() =>
            setReactionsCount(prev => {
              if (prev > 0) {
                return (prev -= 1)
              } else {
                return (prev += 1)
              }
            })
          }>
          😁
        </button>
        count - {reactionsCount}
      </span>
      <br />
      <button onClick={() => test({ author, body, id })}>Ответить</button>
      <Divider sx={{ marginBottom: '20px' }} />
    </>
  )
}

export default CommentItem
