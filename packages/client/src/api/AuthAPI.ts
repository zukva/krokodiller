import { SignInData, SignUpData, SignUpResponse, UserInfo } from './types'
import { practicumApi } from '../services/HTTPTransport'

class AuthAPI {
  public signUp(data: SignUpData): Promise<SignUpResponse> {
    return practicumApi.post<SignUpData, SignUpResponse>('/auth/signup', data)
  }

  public signIn(data: SignInData): Promise<void> {
    return practicumApi.post<SignInData, void>('/auth/signin', data)
  }

  public logout(): Promise<void> {
    return practicumApi.post<void, void>('/auth/logout')
  }

  public getUser(): Promise<UserInfo> {
    return practicumApi.get<void, UserInfo>('/auth/user')
  }
}

export default new AuthAPI()
