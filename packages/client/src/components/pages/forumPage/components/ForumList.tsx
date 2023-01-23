import React from 'react'
import { TopicType } from '../../../../store/forum'
import Topic from './Topic'
import { Grid } from '@mui/material'

type ForumListType = {
  forumListData?: TopicType[]
}

const ForumList: React.FC<ForumListType> = ({ forumListData }) => {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        margin: '20px auto',
        maxWidth: '924px',
        padding: '20px',
        justifyItems: 'center',
        alignItems: 'center',
      }}>
      {forumListData?.length ? (
        forumListData.map((topic: TopicType) => {
          return (
            <Grid item xs={12} key={topic.id}>
              <Topic key={topic.id} {...topic} />
            </Grid>
          )
        })
      ) : (
        <Grid item xs={12}>
          Еще нет созданных тем ;)
        </Grid>
      )}
    </Grid>
  )
}

export default ForumList
