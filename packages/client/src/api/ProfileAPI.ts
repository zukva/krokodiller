import { PasswordData, ProfileData, UserInfo } from './types'
import { practicumApi } from '../services/HTTPTransport'

class ProfileAPI {
  changeProfile(data: ProfileData): Promise<UserInfo> {
    return practicumApi.put<ProfileData, UserInfo>('/user/profile', data)
  }

  changePassword(data: PasswordData): Promise<void> {
    return practicumApi.put<PasswordData, void>('/user/password', data)
  }

  changeAvatar(data: FormData): Promise<UserInfo> {
    return practicumApi.put<FormData, UserInfo>('/user/profile/avatar', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  }
}

export const profileAPI = new ProfileAPI()
