import {isEqual} from 'lodash'

import type BaseRESTService from './BaseRESTService'
import User from '../models/User.model'
import type { UserData } from 'user'

type FindRequest = {
  id: number
}

class UserService implements BaseRESTService {
  public find = ({ id }: FindRequest) => {
    return User.findByPk(id)
  }

  public findByPID = (pId: number) => {
    return User.findOne({
      where: {
        pId,
      },
    })
  }

  public create = async (data: Omit<UserData, 'id'>) => {
    return User.create(data)
  }

  public update = async (data: UserData) => {
    const { id, ...updateData } = data

    return User.update(updateData, {
      where: {
        id,
      },
    })
  }

  public updateOrCreateByPId = async (data: UserData) => {
    const { id, ...restData } = data
    if (!id) {
      return
    }

    const saveData = {
      ...restData,
      pId: id,
    }

    const existedUser = await this.findByPID(id)

    if (existedUser) {
      if (isEqual(existedUser, saveData)) {
        return existedUser
      }
      return User.update(saveData, {
        where: {
          pId: id,
        },
      })
    } else {
      return this.create(saveData)
    }


  }
}

export const userService = new UserService()
export default UserService
