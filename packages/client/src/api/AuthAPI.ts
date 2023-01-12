import {
  OAuthData,
  OAuthServiceIdQuery,
  OAuthServiceIdResponse,
  SignInData,
  SignUpData,
  SignUpResponse,
  UserInfo,
} from './types'
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

  public oauthSignIn(data: OAuthData): Promise<void> {
    return practicumApi.post<OAuthData, void>('/oauth/yandex', data)
  }

  public oauthGetServiceId(
    query: OAuthServiceIdQuery
  ): Promise<OAuthServiceIdResponse> {
    return practicumApi.get<OAuthServiceIdQuery, OAuthServiceIdResponse>(
      '/oauth/yandex/service-id',
      query
    )
  }
}

export default new AuthAPI()
