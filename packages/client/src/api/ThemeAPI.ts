import { serverApi } from '../services/HTTPTransport'
import { GetUserThemeData, SetUserThemeData, UserTheme } from './types'

class ThemeAPI {
  public setUserTheme(data: SetUserThemeData): Promise<void> {
    return serverApi.post<SetUserThemeData, void>('/userTheme', data)
  }

  public getUserTheme(data: GetUserThemeData): Promise<UserTheme> {
    return serverApi.get<GetUserThemeData, UserTheme>('/userTheme', data)
  }
}

export default new ThemeAPI()
