import { createSlice } from '@reduxjs/toolkit'

type UserType = {
  nickname: string
}

export type CommentType = {
  id: string | number
  author: UserType
  body: string
  date: string
  parentId?: string | number
  answerComment?: {
    author: { nickname: string }
    body: string
    commentId?: string | number
  } | null
  reactions?: [
    {
      image: { option: string; count: number; authors: UserType }
    }
  ]
}

export type TopicType = {
  id: string | number
  titleTopic: string
  bodyTopic: string
  tag: string
  author: UserType
  comments: CommentType[]
}

const initialState = {
  topics: [
    {
      id: 'mokId-one for flood topic',
      titleTopic: 'one for flood topic',
      bodyTopic: 'some options',
      tag: 'Общее',
      author: { nickname: 'sam' },
      comments: [],
    },
    {
      id: 'mokId-two for Game topic',
      titleTopic: 'one for flood topic',
      bodyTopic: 'some options',
      tag: 'Игра',
      author: { nickname: 'jin' },
      comments: [],
    },
  ],
}

const topicSlice = createSlice({
  name: 'topic',
  initialState,
  reducers: {
    create(state, action) {
      let topics = state.topics
      topics = [action.payload, ...topics]
      state.topics = topics
    },
    getTopic(state: any, action) {
      const topic = state.topics.find((t: TopicType) => t.id === action.payload)
      return topic
    },
    addNewComment(state, action) {
      const topic = state.topics.find(
        topic => topic.id === action.payload.parentId
      )
      console.log('add new comment redux', topic?.bodyTopic)
      // @ts-ignore
      topic?.comments.push(action.payload)
      console.log(topic?.comments.length)
    },
  },
})

export const { create, getTopic, addNewComment } = topicSlice.actions

export default topicSlice.reducer
