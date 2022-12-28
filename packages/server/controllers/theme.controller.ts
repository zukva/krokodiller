import type { NextFunction, Request, Response } from 'express'

import { userThemeService } from '../services/UserTheme.service'
import NotFoundException from '../exceptions/NotFoundException'

class UserThemeAPI {
  public static createOrUpdate = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const { body } = request
    try {
      await userThemeService.createOrUpdate(body)
      response.json('ok')
    } catch (err) {
      next(err)
    }
  }

  public static find = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const { query } = request

    const founded = await userThemeService.find(query)

    if (founded) {
      response.json({ theme: founded.theme })
    } else {
      next(new NotFoundException('Theme'))
    }
  }
}

export default UserThemeAPI
