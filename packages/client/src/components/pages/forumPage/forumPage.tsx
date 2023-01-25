import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/store'

import { Button, Divider, Box } from '@mui/material'
import ChooseTopicTheme from './components/ChooseTopicTheme'
import ForumList from './components/ForumList'
import PageLayout from '../../common/page-layout/PageLayout'

export const ForumPage = () => {
  const [topicThemeValue, setTopicThemeValue] = useState('Все')
  const [forumData, setForumData] = useState([])

  const topics = useAppSelector((state: any) => state?.forum?.topics)

  useEffect(() => {
    switch (topicThemeValue) {
      case 'Все':
        setForumData(topics)
        break
      case 'Игра':
        setForumData(topics.filter((t: any) => t.tag === 'Игра'))
        break
      case 'Общее':
        setForumData(topics.filter((t: any) => t.tag === 'Общее'))
        break
      default:
        return
    }
  }, [topicThemeValue])
  return (
    <PageLayout>
      <Box
        sx={{
          width: '100%',
        }}
      >
        <Button
          variant="contained"
          sx={{
            m: 1,
          }}>
          <Link
            to={'/forum/add-topic'}
            style={{
              width: '100%',
              height: '100%',
              textDecoration: 'none',
              color: 'white',
            }}>
            Создать
          </Link>
        </Button>
        <Divider />
        <ChooseTopicTheme
          changeTheme={theme => {
            setTopicThemeValue(theme)
          }}
        />
        <br />
        Темы: {topicThemeValue} | количество: {forumData.length}
        <Divider />
        <ForumList forumListData={forumData} />
      </Box>
    </PageLayout>
  )
}
