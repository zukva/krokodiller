export type LeaderboardItem = {
  name: string
  avatar: string
  score: number
}

export type SetGameResultData = {
  ratingFieldName: string
  teamName: string
  data: LeaderboardItem;
}

export type LeaderBoardDataItem = {
  data: LeaderboardItem
}

export type LeaderBoardData = LeaderBoardDataItem[]

export type GetLeaderBoardData = {
  ratingFieldName: string
  cursor: number
  limit: number
}
