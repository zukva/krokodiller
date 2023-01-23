import { createSlice } from '@reduxjs/toolkit'

import leaderboardAPI from '../../api/LeaderboardAPI'
import { ApiTypes, RequestStore } from '../../types'
import { addRequestExtraCases, createAppAsyncThunk } from '../utils'
import { INIT_REQUEST_STATE } from '../consts'
import { setAlertError } from '../alert'
import { RootState } from '../index'
import { TEAM_NAME } from '../../config/api'
import { userInfoSelector } from '../auth'

type LeaderboardState = {
  setGameResultRequest: RequestStore
  getLeaderboardRequest: RequestStore<ApiTypes.LeaderBoardData>
}

export const setGameResult = createAppAsyncThunk(
  'leaderboard/setGameResult',
  async (score: number, { dispatch, getState }) => {
    const {login, avatar} = userInfoSelector(getState());

    if (!login || !avatar) {
      return;
    }

    const data = {
      teamName: TEAM_NAME,
      ratingFieldName: 'score',
      data: {
        score,
        name: login,
        avatar,
      }
    }
    try {
      await leaderboardAPI.setGameResult(data)
    } catch (error: any) {
      if (typeof error === 'string') {
        dispatch(setAlertError(error))
      }
    }
  }
)

export const getLeaderboard = createAppAsyncThunk(
  'leaderboard/getLeaderboard',
  async (_, { dispatch }) => {
    const data = {
      cursor: 0,
      limit: 50,
      ratingFieldName: 'score',
    }
    try {
      return leaderboardAPI.getLeaderBoard(data)
    } catch (error: any) {
      if (typeof error === 'string') {
        dispatch(setAlertError(error))
      }
    }
  }
)

const initialState = {
  setGameResultRequest: INIT_REQUEST_STATE,
  getLeaderboardRequest: INIT_REQUEST_STATE,
} as LeaderboardState

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {},
  extraReducers: builder => {
    addRequestExtraCases(builder, setGameResult, 'setGameResultRequest')
    addRequestExtraCases(builder, getLeaderboard, 'getLeaderboardRequest')
  },
})

export const leaderbordSelector = (state: RootState) => state.leaderboard?.getLeaderboardRequest?.payload

export default leaderboardSlice.reducer
