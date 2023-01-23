import { prakticumApi } from '../services/HTTPTransport'
import { GetLeaderBoardData, LeaderBoardData, SetGameResultData } from './types'
import { TEAM_NAME } from '../config/api'

class LeaderboardAPI {
  setGameResult(data: SetGameResultData): Promise<void> {
    return prakticumApi.post<SetGameResultData, void>('/leaderboard', data)
  }

  getLeaderBoard(data: GetLeaderBoardData): Promise<LeaderBoardData> {
    return prakticumApi.post<GetLeaderBoardData, LeaderBoardData>(`/leaderboard/${TEAM_NAME}`, data)
  }
}

export default new LeaderboardAPI()
