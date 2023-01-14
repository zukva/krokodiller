import {
  OAuthData,
  OAuthServiceIdQuery,
  OAuthServiceIdResponse,
  SignInData,
  SignUpData,
  SignUpResponse,
  UserInfo,
} from './types'
import { serverApi } from '../services/HTTPTransport'

class AuthAPI {
  public signUp(data: SignUpData): Promise<SignUpResponse> {
    return serverApi.post<SignUpData, SignUpResponse>('/p-api/auth/signup', data)
  }

  public signIn(data: SignInData): Promise<void> {
    return serverApi.post<SignInData, void>('/p-api/auth/signin', data)
  }

  public logout(): Promise<void> {
    return serverApi.post<void, void>('/p-api/auth/logout')
  }

  public getUser(): Promise<UserInfo> {
    return serverApi.get<void, UserInfo>('/p-api/auth/user')
  }

  public oauthSignIn(data: OAuthData): Promise<void> {
    return serverApi.post<OAuthData, void>('/p-api/oauth/yandex', data)
  }

  public oauthGetServiceId(query: OAuthServiceIdQuery): Promise<OAuthServiceIdResponse> {
    return serverApi.get<OAuthServiceIdQuery, OAuthServiceIdResponse>('/p-api/oauth/yandex/service-id', query)
  }
}

export default new AuthAPI()
