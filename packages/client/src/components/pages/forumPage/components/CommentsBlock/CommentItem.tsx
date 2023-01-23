import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { CommentType } from '../../../../../store/forum'
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
                  <AnswerToComment
                    author={answerComment.author.nickname}
                    body={answerComment.body}
                  />
                )}

                <br />
                {body ? body : 'no body'}
              </Typography>
            </>
          }
        />
        {/* id --- {id} <br />
      parentId --- {parentId} <br />
      body comment --- {body} <br />
      author comment --- {author.nickname} <br />
      date comment --- {date} <br />*/}
      </ListItem>
      <br />
      <hr />
      reactions |{' '}
      <span>
        <button
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
        </button>{' '}
        count - {reactionsCount}
      </span>{' '}
      <br />
      <button onClick={() => test({ author, body, id })}>
        answer to this comment
      </button>
      <hr />
    </>
  )
}

export default CommentItem
