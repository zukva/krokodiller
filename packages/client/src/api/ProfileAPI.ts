import { PasswordData, ProfileData, UserInfo } from './types'
import { prakticumApi } from '../services/HTTPTransport'

class ProfileAPI {
  changeProfile(data: ProfileData): Promise<UserInfo> {
    return prakticumApi.put<ProfileData, UserInfo>('/user/profile', data)
  }

  changePassword(data: PasswordData): Promise<void> {
    return prakticumApi.put<PasswordData, void>('/user/password', data)
  }

  changeAvatar(data: FormData): Promise<UserInfo> {
    return prakticumApi.put<FormData, UserInfo>('/user/profile/avatar', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  }
}

export const profileAPI = new ProfileAPI()
