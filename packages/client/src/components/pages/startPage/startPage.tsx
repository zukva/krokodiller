import React from 'react'

import { RoutesList } from '../../../routes/routesList'
import { Link } from '../../common/link'

export const StartPage: React.FC = () => {
  return (
    <div>
      тут стартовый лендинг
      <p>
        <Link to={RoutesList.LoginPage}>LOGIN_PAGE</Link>
      </p>
      <p>
        <Link to={RoutesList.RegisterPage}>REGISTER_PAGE</Link>
      </p>
      <p>
        <Link to={RoutesList.ProfilePage}>PROFILE_PAGE</Link>
      </p>
      <p>
        <Link to={RoutesList.LeaderboardPage}>LEADERBOARD_PAGE</Link>
      </p>
      <p>
        <Link to={RoutesList.GamePage}>GAME_PAGE</Link>
      </p>
      <p>
        <Link to={RoutesList.ForumPage}>FORUM_PAG</Link>
      </p>
    </div>
  )
}
