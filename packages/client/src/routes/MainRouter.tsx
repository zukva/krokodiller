import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import { RoutesList } from './routesList'
import { StartPage } from '../components/pages/startPage/startPage'
import { LoginPage } from '../components/pages/login/loginPage'
import { RegisterPage } from '../components/pages/register/registerPage'
import { LeaderBoardPage } from '../components/pages/leaderBoardPage/leaderBoardPage'
import { ForumPage } from '../components/pages/forumPage/forumPage'
import { ProfilePage } from '../components/pages/profile/profile'
import { GamePage } from '../components/pages/gamePage/gamePage'
import ProtectedRoute from '../HOC/ProtectedRoute'

export const MainRouter: React.FC = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path={RoutesList.LoginPage} element={<LoginPage />} />
        <Route path={RoutesList.RegisterPage} element={<RegisterPage />} />
        <Route
          path={RoutesList.LeaderboardPage}
          element={
            <ProtectedRoute>
              <LeaderBoardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={RoutesList.ForumPage}
          element={
            <ProtectedRoute>
              <ForumPage />
            </ProtectedRoute>
          }
        />

        <Route
          path={RoutesList.ProfilePage}
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path={RoutesList.GamePage}
          element={
            <ProtectedRoute>
              <GamePage />
            </ProtectedRoute>
          }
        />
        <Route path={RoutesList.StartPage} index element={<StartPage />} />
      </Routes>
    </ErrorBoundary>
  )
}
