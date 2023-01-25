import { Container } from '@mui/system'
import { Chip, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Topic from '../components/Topic'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../../../hooks/store'
import { TopicType } from '../../../../store/forum'
import CommentsBlock from '../components/CommentsBlock/CommentsBlock'
import PageLayout from '../../../common/page-layout/PageLayout'

const SingleTopicPage = () => {
  const [data, setData] = useState({})
  const { id } = useParams()
  const currentTopic = useAppSelector((state: any) => state.forum.topics).find(
    (topic: TopicType) => topic.id === id
  )

  useEffect(() => {
    setData(currentTopic)
  }, [currentTopic])

  return (
    <PageLayout>
      <Container maxWidth="md" sx={{ m: '20px auto' }}>
        {/* @ts-ignore */}
        {data === currentTopic && <Topic {...data} />}

        <Divider sx={{ m: '10px 0' }}>
          <Chip label="Комментарии" />
        </Divider>

        <CommentsBlock />
      </Container>
    </PageLayout>
  )
}

export default SingleTopicPage
