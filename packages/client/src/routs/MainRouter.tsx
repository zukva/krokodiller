import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import { ROUTS } from './routsList'
import { StartPage } from '../components/pages/startPage/startPage'
import { LoginPage } from '../components/pages/login/loginPage'
import { RegisterPage } from '../components/pages/register/registerPage'
import { LeaderBoardPage } from '../components/pages/leaderBoardPage/leaderBoardPage'
import { ForumPage } from '../components/pages/forumPage/forumPage'
import { ProfilePage } from '../components/pages/profile/profile'
import GamePage from '../components/pages/game'
import ProtectedRoute from '../HOC/ProtectedRout'

export const MainRouter: React.FC = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path={ROUTS.LOGIN_PAGE} element={<LoginPage />} />
        <Route path={ROUTS.REGISTER_PAGE} element={<RegisterPage />} />
        <Route
          path={ROUTS.LEADERBOARD_PAGE}
          element={
            <ProtectedRoute>
              <LeaderBoardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTS.FORUM_PAGE}
          element={
            <ProtectedRoute>
              <ForumPage />
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTS.PROFILE_PAGE}
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTS.GAME_PAGE}
          element={
            <ProtectedRoute>
              <GamePage />
            </ProtectedRoute>
          }
        />
        <Route path={ROUTS.START_PAGE} index element={<StartPage />} />
      </Routes>
    </ErrorBoundary>
  )
}
