import { Router } from 'express'
import UserThemeAPI from '../controllers/theme.controller'

export const themesRoutes = (router: Router) => {
  const themesRouter: Router = Router()

  themesRouter
    .post('/', [], UserThemeAPI.createOrUpdate)
    .get('/', [], UserThemeAPI.find)

  router.use('/userTheme', themesRouter)
}
