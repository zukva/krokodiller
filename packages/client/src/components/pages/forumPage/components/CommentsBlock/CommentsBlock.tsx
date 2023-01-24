import { Avatar, Button, Divider, List, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { CommentType, TopicType } from '../../../../../store/forum'
import { addNewComment } from '../../../../../store/forum'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/store'

import { useParams } from 'react-router-dom'
import CommentItem from './CommentItem'
import AnswerToComment from './AnswerToComment'

const CommentsBlock = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const [commentValue, setCommentValue] = useState('')
  const [commentData, setCommentData] = useState([])
  const [answerData, setAnswerData] = useState<null | any>(null)
  const currentComments = useAppSelector(
    (state: any) => state.forum.topics
  ).find((topic: TopicType) => topic.id === id).comments

  const addComment = () => {
    if (commentValue) {
      const newComment: CommentType = {
        id: commentValue,
        body: commentValue,
        author: { nickname: 'New Author' },
        parentId: id,
        answerComment: null,
        date: '',
      }

      if (answerData) {
        const aData = { ...answerData }
        newComment.answerComment = aData
      }

      setCommentValue('')
      setAnswerData(null)
      dispatch(addNewComment(newComment))
    }
  }

  useEffect(() => {
    setCommentData(currentComments)
  }, [currentComments])

  return (
    <>
      <List
        sx={{
          width: '767px',
          m: '20px auto',
        }}>
        {commentData.map((comment: CommentType) => {
          return (
            <CommentItem
              test={(data: any) => setAnswerData(data)}
              key={comment.id}
              {...comment}
            />
          )
        })}
      </List>
      <Divider />
      <Box
        sx={{
          display: 'grid',
          gap: '10px',
          mt: '20px',
        }}>
        {answerData && (
          <AnswerToComment
            author={answerData && answerData?.author}
            body={answerData && answerData?.body}
            closeAnswerBlock={() => setAnswerData(null)}
          />
        )}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'nowrap',
            alignItems: 'center',
            gap: '10px',
            justifyContent: 'space-between',
          }}>
          <Avatar sx={{ width: '56px', height: '56px' }}>T</Avatar>
          <TextField
            fullWidth
            value={commentValue}
            onChange={(e: React.SyntheticEvent) =>
              setCommentValue((e.target as HTMLInputElement).value)
            }
          />
          <Button variant="contained" onClick={addComment}>
            Добавить
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default CommentsBlock
