import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTS } from '../../../routs/routsList'

import { Header } from '../../Header/Header'
import Main from '../../Main/Main'

export const StartPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Main />
      <div
        style={{
          position: 'fixed',
          right: 0,
          bottom: '50%',
        }}>
        <p>
          <Link to={ROUTS.LOGIN_PAGE}>LOGIN_PAGE</Link>
        </p>
        <p>
          <Link to={ROUTS.REGISTER_PAGE}>REGISTER_PAGE</Link>
        </p>
        <p>
          <Link to={ROUTS.PROFILE_PAGE}>PROFILE_PAGE</Link>
        </p>
        <p>
          <Link to={ROUTS.LEADERBOARD_PAGE}>LEADERBOARD_PAGE</Link>
        </p>
        <p>
          <Link to={ROUTS.GAME_PAGE}>GAME_PAGE</Link>
        </p>
        <p>
          <Link to={ROUTS.FORUM_PAGE}>FORUM_PAG</Link>
        </p>
      </div>
    </div>
  )
}
