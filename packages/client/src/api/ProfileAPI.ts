import { PasswordData, ProfileData, UserInfo } from './types'
import { serverApi } from '../services/HTTPTransport'

class ProfileAPI {
  changeProfile(data: ProfileData): Promise<UserInfo> {
    return serverApi.put<ProfileData, UserInfo>('/p-api/user/profile', data)
  }

  changePassword(data: PasswordData): Promise<void> {
    return serverApi.put<PasswordData, void>('/p-api/user/password', data)
  }

  changeAvatar(data: FormData): Promise<UserInfo> {
    return serverApi.put<FormData, UserInfo>('/p-api/user/profile/avatar', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  }
}

export const profileAPI = new ProfileAPI()
