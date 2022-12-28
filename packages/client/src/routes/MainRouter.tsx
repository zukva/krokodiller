import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import { RoutesList } from './routesList'
import { StartPage } from '../components/pages/startPage/startPage'
import LoginPage from '../components/pages/login'
import RegisterPage from '../components/pages/register'
import { LeaderBoardPage } from '../components/pages/leaderBoardPage/leaderBoardPage'
import { ForumPage } from '../components/pages/forumPage/forumPage'
import ProfilePage from '../components/pages/profile/profile'
import { GamePage } from '../components/pages/gamePage/gamePage'

export const MainRouter: React.FC = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path={RoutesList.LoginPage} element={<LoginPage />} />
        <Route path={RoutesList.RegisterPage} element={<RegisterPage />} />
        <Route
          path={RoutesList.LeaderboardPage}
          element={<LeaderBoardPage />}
        />
        <Route path={RoutesList.ForumPage} element={<ForumPage />} />

        <Route path={RoutesList.ProfilePage} element={<ProfilePage />} />
        <Route path={RoutesList.GamePage} element={<GamePage />} />
        <Route path={RoutesList.StartPage} index element={<StartPage />} />
      </Routes>
    </ErrorBoundary>
  )
}
