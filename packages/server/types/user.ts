import type { Nullable } from 'common'

export type UserData = {
  id?: number
  pId: number
  displayName: Nullable<string>
  login: string
  avatar: Nullable<string>
  email: string
  phone: string
}
