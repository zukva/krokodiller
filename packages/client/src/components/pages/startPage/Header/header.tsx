import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import { Person } from '@mui/icons-material'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import ship from '../../../../assets/enemy-battlecruiser-base.png'
import { RoutesList } from '../../../../routes/routesList'
import { Link } from '../../../common/link'
import { PRACTICUM_RESOURCES_PATH } from '../../../../config/api'
import { useAppDispatch, useAppSelector } from '../../../../hooks/store'
import { logout, userInfoSelector } from '../../../../store/auth'
import { useCallback } from 'react'


const pages = [ { pageName: 'Play', route: RoutesList.GamePage }, {
  pageName: 'Leaderboard',
  route: RoutesList.LeaderboardPage
}, { pageName: 'Forum', route: RoutesList.ForumPage } ]

function Header() {
  const [ anchorElNav, setAnchorElNav ] = React.useState<null | HTMLElement>(null)
  const [ anchorElUser, setAnchorElUser ] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  const dispatch = useAppDispatch()
  const userInfo = useAppSelector(userInfoSelector)

  const handleLogout = useCallback(() => {
    dispatch(logout())
  }, [])

  return (
    <AppBar position='static' sx={ { background: '#414e5a' } }>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={ { display: { xs: 'none', md: 'flex' }, mr: 1, width: 80, height: 80, padding: 2 } }>
            <img src={ ship } alt={ 'logo' } />
          </Box>

          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={ {
              mr: 4,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            } }
          >
            Space Runner
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={ {
                mr: 4,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 400,
                fontSize: 14,
                fontFamily: 'italic',
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none'
              } }
            >
              by Zukva
            </Typography>
          </Typography>

          <Box sx={ { flexGrow: 1, display: { xs: 'flex', md: 'none' } } }>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={ handleOpenNavMenu }
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={ anchorElNav }
              anchorOrigin={ {
                vertical: 'bottom',
                horizontal: 'left'
              } }
              keepMounted
              transformOrigin={ {
                vertical: 'top',
                horizontal: 'left'
              } }
              open={ Boolean(anchorElNav) }
              onClose={ handleCloseNavMenu }
              sx={ {
                display: { xs: 'block', md: 'none' }
              } }
            >
              { pages.map((page) => (
                <MenuItem key={ page.pageName } onClick={ handleCloseNavMenu }>
                  <Link to={ page.route }>
                    <Typography textAlign='center'>{ page.pageName }</Typography>
                  </Link>
                </MenuItem>
              )) }
            </Menu>
          </Box>
          {/* DESKTOP MENU*/ }
          <Box sx={ { display: { xs: 'flex', md: 'none' }, mr: 1, width: 80, height: 80, padding: 2 } }>
            <img src={ ship } alt={ 'logo' } />
          </Box>

          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={ {
              mr: 4,
              display: { xs: 'flex', md: 'none' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            } }
          >
            Space Runner
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={ {
                mr: 4,
                display: { xs: 'flex', md: 'none' },
                fontWeight: 400,
                fontSize: 14,
                fontFamily: 'italic',
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none'
              } }
            >
              by Zukva
            </Typography>
          </Typography>
          <Box sx={ { flexGrow: 1, gap: 5, display: { xs: 'none', md: 'flex' } } }>
            <MenuItem key={ 'Play' } onClick={ handleCloseNavMenu }
                      sx={ {
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: 'white',
                        borderRadius: 3,
                        backgroundColor: 'rgba(255,255,255,0.07)'
                      } }>

              <Typography textAlign='center'
                          component={ 'a' }
                          href={ RoutesList.GamePage }
                          sx={ {
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none'
                          } }>Play</Typography>

            </MenuItem>
            <MenuItem key={ 'LeaderBoard' } onClick={ handleCloseNavMenu }>

              <Typography textAlign='center'
                          component={ 'a' }
                          href={ RoutesList.LeaderboardPage }
                          sx={ {
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'lightgray',
                            textDecoration: 'none'
                          } }>Leader board</Typography>

            </MenuItem>
            <MenuItem key={ 'Forum' } onClick={ handleCloseNavMenu }>
              <Typography textAlign='center'
                          component={ 'a' }
                          href={ RoutesList.ForumPage }
                          sx={ {
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'lightgray',
                            textDecoration: 'none'
                          } }>Forum</Typography>
            </MenuItem>

          </Box>

          <Box sx={ { flexGrow: 0 } }>
            <Tooltip title='Open settings'>
              <IconButton onClick={ handleOpenUserMenu } sx={ { p: 0 } }>
                <Avatar alt='Remy Sharp' src={ `${ PRACTICUM_RESOURCES_PATH }/${ userInfo?.avatar }` }>
                  <Person fill='true' fontSize='medium' />
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={ { mt: '45px' } }
              id='menu-appbar'
              anchorEl={ anchorElUser }
              anchorOrigin={ {
                vertical: 'top',
                horizontal: 'right'
              } }
              keepMounted
              transformOrigin={ {
                vertical: 'top',
                horizontal: 'right'
              } }
              open={ Boolean(anchorElUser) }
              onClose={ handleCloseUserMenu }
            >

              <MenuItem key='profile' onClick={ handleCloseUserMenu }>

                <Button>
                  <Typography
                    component={ 'a' }

                    sx={ {
                      textDecoration: 'none',
                      color: '#545050'
                    }
                    }
                    href={ RoutesList.ProfilePage }
                    textAlign='center'>Profile</Typography>
                </Button>

              </MenuItem>
              <MenuItem key={ 'logout' } onClick={ handleCloseUserMenu }>

                <Button onClick={ handleLogout }>
                  <Typography
                    textAlign='center'
                    sx={ {
                      color: 'red'
                    } }>Logout</Typography>
                </Button>

              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
