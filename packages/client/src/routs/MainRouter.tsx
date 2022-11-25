import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import { ROUTS } from '../routs/routsList'
import { StartPage } from '../components/pages/startPage/startPage'
import { LoginPage } from '../components/pages/login/loginPage'
import { RegisterPage } from '../components/pages/register/registerPage'
import { LeaderBoardPage } from '../components/pages/leaderBoardPage/leaderBoardPage'
import { ForumPage } from '../components/pages/forumPage/forumPage'
import { ProfilePage } from '../components/pages/profile/profile'
import { GamePage } from '../components/pages/gamePage/gamePage'
import ProtectedRoute from '../HOC/ProtectedRout'


interface IMainRouter {
  isAuth: boolean
}

export const MainRouter: React.FC<IMainRouter> = ({isAuth}) => {



  return (

    <ErrorBoundary>
      <Routes>

        <Route path={ ROUTS.LOGIN_PAGE } element={ <LoginPage /> } />
        <Route path={ ROUTS.REGISTER_PAGE } element={ <RegisterPage /> } />
        <Route path={ ROUTS.LEADERBOARD_PAGE }
               element={ <ProtectedRoute isAuth={ isAuth }><LeaderBoardPage /></ProtectedRoute> } />
        <Route path={ ROUTS.FORUM_PAGE } element={ <ProtectedRoute isAuth={ isAuth }><ForumPage /></ProtectedRoute> } />

        <Route path={ ROUTS.PROFILE_PAGE } element={
          <ProtectedRoute isAuth={ isAuth }>
            <ProfilePage />
          </ProtectedRoute> } />
        <Route path={ ROUTS.GAME_PAGE } element={ <ProtectedRoute isAuth={ isAuth }><GamePage /></ProtectedRoute> } />
        <Route path={ ROUTS.START_PAGE } index element={ <StartPage /> }></Route>

      </Routes>
    </ErrorBoundary>

  )
}
