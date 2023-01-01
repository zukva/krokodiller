export type Nullable<T> = T | null
export type RequestState = 'idle' | 'pending' | 'succeeded' | 'failed'
export type RequestStore<T = any> = {
  loading: RequestState
  payload?: T
}
