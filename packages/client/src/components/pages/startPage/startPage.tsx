import React from 'react'
import { Box, Button, Container } from '@mui/material'
import gameCover from '../../../assets/game-cover.png'
import backgrStars from '../../../assets/background-stars.png'
import Typography from '@mui/material/Typography'
import PageLayout from '../../common/page-layout'
import { RoutesList } from '../../../routes/routesList'

export const StartPage: React.FC = () => {
  const listOfTeam = [
    'Антон Колотаев',
    'Андрей Игнашов',
    'Андрей Игнашов',
    'Татьяна Шадрина',
    'Ментор Артём Коньков',
  ]
  return (
    <PageLayout>
      <Box
        sx={{
          flexGrow: '1',
          padding: { xs: 0, md: 4 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <Box sx={{ flexGrow: 1 }}>
          <Container
            sx={{
              padding: 4,
              display: { xs: 'flex', sm: 'grid' },
              gridTemplateColumns: '1fr 1fr',
              gap: { xs: 2, md: 8 },
              flexWrap: 'wrap',
              justifyContent: 'center',
              height: { md: '100%' },
              width: '100%',
            }}>
            <Box
              sx={{
                width: '100%',
                borderRadius: '10px',
                overflow: 'hidden',
                backgroundImage: `url(${gameCover})`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                display: { xs: 'none', sm: 'block' },
              }}
            />
            <Box sx={{ borderRadius: '10px', padding: '10px' }}>
              <Container>
                <Typography
                  variant="h5"
                  noWrap
                  sx={{
                    mb: 4,
                    fontWeight: 600,
                    fontSize: 24,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    textAlign: 'center',
                  }}>
                  Описание игры
                </Typography>
                <Typography
                  component={'p'}
                  sx={{
                    maxWidth: '400px',
                    fontWeight: 400,
                    fontSize: 20,
                    letterSpacing: '.1rem',
                    lineHeight: { xs: 1.5, md: 2 },
                    color: 'inherit',
                    textDecoration: 'none',
                    textAlign: 'center',
                  }}>
                  Необходимо уничтожить космическую армию захватчиков.
                  <br />
                  В твоем распоряжении корабль с бесконечным боезапапсом.
                  <br />
                  Управление движением корабля (право/лево) с помощью мыши
                  <br />
                </Typography>
              </Container>
              <Button
                color={'primary'}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  backgroundColor: 'black',
                  backgroundImage: `url(${backgrStars})`,
                  backgroundRepeat: `no-repeat`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  border: '1px solid white',
                  borderRadius: '10px',
                  padding: '5px',
                  marginTop: '20px',
                }}
                component={'a'}
                href={RoutesList.GamePage}>
                <Typography
                  textAlign="center"
                  component={'span'}
                  sx={{
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    // color: 'white',
                    textDecoration: 'none',
                    padding: '5px',
                  }}>
                  Play
                </Typography>
              </Button>
            </Box>
          </Container>
        </Box>
        <Box
          sx={{
            border: '4px solid lightgray',
            borderRadius: '10px',
            padding: '10px',
            width: '100%',
          }}>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mb: 2,
              fontWeight: 600,
              fontSize: 16,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              textAlign: 'center',
            }}>
            Team
          </Typography>
          <Container
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 2,
            }}>
            {listOfTeam.map((item, index) => (
              <Typography
                component={'p'}
                key={index}
                sx={{
                  display: 'flex',
                  flexWrap: 'nowrap',
                  gap: 1,
                  justifyContent: 'space-between',
                  fontWeight: 400,
                  fontSize: 14,
                  letterSpacing: '.1rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  textAlign: 'center',
                }}>
                <Typography component={'span'} sx={{ whiteSpace: 'nowrap' }}>
                  {' '}
                  {item}
                </Typography>
              </Typography>
            ))}
          </Container>
        </Box>
      </Box>
    </PageLayout>
  )
}
