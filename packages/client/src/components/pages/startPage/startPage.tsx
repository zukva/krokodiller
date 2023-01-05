import React from 'react'
import { Box, Container, ImageList, ImageListItem } from '@mui/material'
import Header from './Header/header'
import { useAppSelector } from '../../../hooks/store'
import { themeSelector } from '../../../store/theme'
import { Themes } from '../../../enums/themes'
import gameCover from '../../../assets/game-cover.png'
import Typography from '@mui/material/Typography'

export const StartPage: React.FC = () => {
  const theme = useAppSelector(themeSelector)
  console.log('theme', theme)

  const listOfFirstPlayers = [ { name: '1 player', count: 10 }, { name: '2 player', count: 7 }, {
    name: '3 player',
    count: 4
  } ]

  const listOfTeam = [  'Антон Колотаев',  'Андрей Игнашов', 'Андрей Игнашов', 'Татьяна Шадрина','Ментор Артём Коньков',]
  return (

    <Box sx={ {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme === Themes.DarkTheme ? 'darkgray' : '#e7e1e138',
      minHeight: '100vh'
    } }
         color={ 'primary' }
    >
      <Header />
      <Box sx={ {
        flexGrow: '1',
        padding: { xs: 0, md: 4 },
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'

      } }>
        <Box sx={ {} }>
          <Container sx={ {
            padding: 4,
            display: 'flex',
            gap: { xs: 2, md: 8 },
            flexWrap: 'wrap',
            justifyContent: 'center',
            height: '100%'
          } }>
            <Box sx={ {
              maxWidth: { xs: '300px', lg: '500px' },
              minWidth: { xs: '250px', lg: '400px' },
              minHeight:'100px',
              height: 'auto',
              borderRadius: '10px',
              overflow: 'hidden',
              backgroundImage: `url(${ gameCover })`,
              backgroundRepeat: `no-repeat`,
              backgroundPosition: 'center',
              backgroundSize: 'contain'
            }
            }/>


            <Box sx={ { borderRadius: '10px', padding: '10px' } }>
              <Container>
                <Typography
                  variant='h5'
                  noWrap
                  sx={ {
                    mb: 4,
                    fontWeight: 600,
                    fontSize: 24,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    textAlign: 'center'
                  } }
                >
                  Описание игры
                </Typography>
                <Typography
                  component={ 'p' }

                  sx={ {
                    maxWidth: '400px',

                    fontWeight: 400,
                    fontSize: 20,
                    letterSpacing: '.1rem',
                    lineHeight: 2,
                    color: 'inherit',
                    textDecoration: 'none',
                    textAlign: 'center'
                  } }
                >
                  Необходимо уничтожить космическую армию захватчиков.<br />
                  В твоем распоряжении корабль с бесконечным боезапапсом.<br />
                  Управление движением корабля (право/лево) с помощью мыши<br />


                </Typography>
              </Container>

            </Box>
          </Container>
        </Box>

        <Box sx={ {
          border: '4px solid lightgray', borderRadius: '10px', padding: '10px',
          display: { xs: 'flex',  },
          flexDirection:{xs: 'row', lg: 'column'},
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          flexGrow: 1

        } }>
          <Box sx={ { display: 'flex', flexDirection: 'column', gap: 4, mb: 5 } }>

            <Typography
              variant='h5'
              noWrap
              sx={ {
                mb: 2,
                fontWeight: 600,
                fontSize: 16,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
                textAlign: 'center'
              } }
            >
              Best players
            </Typography>
            {
              listOfFirstPlayers.map((item, index) => (
                <Typography
                  component={ 'p' }
                  key={ index }
                  sx={ {
                    display: 'flex',
                    flexWrap: 'nowrap',
                    gap: 1,
                    justifyContent: 'space-between',
                    fontWeight: 400,
                    fontSize: 14,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    textAlign: 'center'
                  } }
                >
                  <Typography component={ 'span' }
                              sx={ { whiteSpace: 'nowrap' } }>{ index + 1 } . { item.name }</Typography>
                  <span>{ item.count }</span>
                </Typography>
              ))
            }
          </Box>
          <Box sx={ { display: 'flex', flexDirection: 'column', gap: 4, minWidth: '300px', mb: 5 } }>

            <Typography
              variant='h5'
              noWrap
              sx={ {
                mb: 2,
                fontWeight: 600,
                fontSize: 16,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
                textAlign: 'center'
              } }
            >
              Team
            </Typography>
            {
              listOfTeam.map((item, index) => (
                <Typography
                  component={ 'p' }
                  key={ index }
                  sx={ {
                    display: 'flex',
                    flexWrap: 'nowrap',
                    gap: 1,
                    justifyContent: 'space-between',
                    fontWeight: 400,
                    fontSize: 14,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    textAlign: 'center'
                  } }
                >
                  <Typography component={ 'span' }
                              sx={ { whiteSpace: 'nowrap' } }>{ index + 1 } . { item }</Typography>
                </Typography>
              ))
            }

          </Box>


        </Box>
      </Box>


    </Box>
  )
}
