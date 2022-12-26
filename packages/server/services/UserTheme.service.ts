import type BaseRESTService from './BaseRESTService'
import UserTheme from '../models/UserTheme.model'

type FindRequest = {
  userId?: number
  device?: string
}

type CreateRequest = {
  theme: string
  device: string
  userId: number
}

class UserThemeService implements BaseRESTService {
  public find = ({ userId, device }: FindRequest) => {
    return UserTheme.findOne({
      where: {
        ownerId: userId,
        device,
      },
    })
  }

  public createOrUpdate = async (data: CreateRequest) => {
    const { userId, theme, device } = data
    const createData = {
      ownerId: userId,
      theme: theme,
      device: device,
    }

    const existed = await this.find({ userId, device })

    if (existed) {
      return UserTheme.update(createData, {
        where: {
          id: existed.id,
        },
      })
    } else {
      return UserTheme.create(createData as UserTheme)
    }
  }
}

export const userThemeService = new UserThemeService()
export default UserThemeService
