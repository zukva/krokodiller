import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTS } from '../../../routs/routsList'

export const StartPage: React.FC = () => {
  return (
    <div>
      тут стартовый лендинг

      <p><Link to={ ROUTS.LOGIN_PAGE }>LOGIN_PAGE</Link></p>
      <p><Link to={ ROUTS.REGISTER_PAGE }>REGISTER_PAGE</Link></p>
      <p><Link to={ ROUTS.PROFILE_PAGE }>PROFILE_PAGE</Link></p>
      <p><Link to={ ROUTS.LEADERBOARD_PAGE }>LEADERBOARD_PAGE</Link></p>
      <p><Link to={ ROUTS.GAME_PAGE }>GAME_PAGE</Link></p>
      <p><Link to={ ROUTS.FORUM_PAGE }>FORUM_PAG</Link></p>
    </div>
  )
}
