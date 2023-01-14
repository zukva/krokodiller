import { userService } from '../services/User.service'

export const changeUserInterceptor = async (responseBuffer: Buffer) => {
  const response = responseBuffer.toString('utf8')
  try {
    const resData = JSON.parse(response)
    await userService.updateOrCreateByPId(resData)
  } catch (err) {
    console.log(err)
  }

  return response
}
