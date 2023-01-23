import React, {FC, useEffect} from 'react'
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
} from '@mui/material'

import PageLayout from '../../common/page-layout'
import { useAppDispatch, useAppSelector } from '../../../hooks/store'
import { getLeaderboard, leaderbordSelector } from '../../../store/leaderboard'
import AppAvatar from '../../common/app-avatar'

export const LeaderBoardPage: FC = () => {
  const dispatch = useAppDispatch()
  const leaderboardData = useAppSelector(leaderbordSelector)

  useEffect(() => {
    dispatch(getLeaderboard())
  }, [])

  return (
    <PageLayout>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          flexDirection: 'column',
          marginTop: '30px',
        }}>
        <Typography variant="h3">Список лидеров</Typography>
        <List>
          {leaderboardData?.map(item => (
            <ListItem key={item.data.name}>
              <ListItemAvatar>
                <AppAvatar src={item.data.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '500px',
                    }}>
                    <Typography>{item.data.name}</Typography>
                    <Typography>{item.data.score}</Typography>
                  </Box>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </PageLayout>
  )
}
