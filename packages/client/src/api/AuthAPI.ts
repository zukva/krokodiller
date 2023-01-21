import {
  OAuthData,
  OAuthServiceIdQuery,
  OAuthServiceIdResponse,
  SignInData,
  SignUpData,
  SignUpResponse,
  UserInfo,
} from './types'
import { prakticumApi } from '../services/HTTPTransport'

class AuthAPI {
  public signUp(data: SignUpData): Promise<SignUpResponse> {
    return prakticumApi.post<SignUpData, SignUpResponse>('/auth/signup', data)
  }

  public signIn(data: SignInData): Promise<void> {
    return prakticumApi.post<SignInData, void>('/auth/signin', data)
  }

  public logout(): Promise<void> {
    return prakticumApi.post<void, void>('/auth/logout')
  }

  public getUser(): Promise<UserInfo> {
    return prakticumApi.get<void, UserInfo>('/auth/user')
  }

  public oauthSignIn(data: OAuthData): Promise<void> {
    return prakticumApi.post<OAuthData, void>('/oauth/yandex', data)
  }

  public oauthGetServiceId(
    query: OAuthServiceIdQuery
  ): Promise<OAuthServiceIdResponse> {
    return prakticumApi.get<OAuthServiceIdQuery, OAuthServiceIdResponse>(
      '/oauth/yandex/service-id',
      query
    )
  }
}

export default new AuthAPI()
