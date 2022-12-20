import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { AppThunk, AppDispatch } from '../../../store'

type ForumType = {
  userId: number | string
  id: number | string
  body: string
  title: string
}

const initialState: ForumType[] = []

const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {
    setForum(state, action: PayloadAction) {
      return action.payload
    },
  },
})

export const getForum = (): AppThunk => {
  return (dispatch: AppDispatch) => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5')
      .then(response => {
        dispatch(
          setForum(
            response.data.map(
              (item: any) => Object.assign(item, { tag: '#игра' })
              //   {
              //     console.log(item)
              //   }
            )
          )
        )
        console.log(response.data)
      })
  }
}

export const { setForum } = forumSlice.actions
export default forumSlice.reducer

console.log(forumSlice)
