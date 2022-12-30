export type SignUpData = {
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
}

export type SignUpResponse = {
  id: string
}

export type SignInData = {
  login: string
  password: string
}

export type UserInfo = {
  id: number
  first_name: string
  second_name: string
  display_name: string
  login: string
  email: string
  phone: string
  avatar: string
}
