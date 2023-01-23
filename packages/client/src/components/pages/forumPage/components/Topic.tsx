import { Divider, Avatar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

import { useLocation } from 'react-router-dom'

import { TopicType } from '../../../../store/forum'

const Topic: React.FC<TopicType> = ({
  id,
  bodyTopic,
  titleTopic,
  author,
  comments,
  tag,
}) => {
  const { pathname } = useLocation()
  return (
    <>
      <Box
        sx={{
          padding: '10px',
          borderRadius: '8px',
          boxShadow: '0 0 24px rgba(0, 0, 0, .14)',
        }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '20px',
            padding: '10px',
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              justifyContent: 'space-between',
            }}>
            <Avatar sx={{ width: '50px', height: '50px' }}>T</Avatar>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: '12px', textAlign: 'center' }}>
              {author?.nickname}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              justifyContent: 'space-between',
            }}>
            <Typography variant="caption">date</Typography>
            <Typography variant="h6" component={'h6'}>
              {pathname === '/forum' ? (
                <Link to={`/forum/${id}`}>{titleTopic}</Link>
              ) : (
                titleTopic
              )}
            </Typography>

            <Box>
              <Typography
                variant="subtitle2"
                component={'span'}
                sx={{
                  fontSize: '16px',
                }}>
                {bodyTopic ? bodyTopic : 'Placeholder body topic'}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider />
        <Box sx={{ p: '10px' }}>
          {tag ? tag : 'Тег скоро будет'} | reactions
        </Box>
      </Box>
    </>
  )
}

export default Topic
