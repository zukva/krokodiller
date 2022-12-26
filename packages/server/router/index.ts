import { Router } from 'express'
import { themesRoutes } from './userTheme'

const router: Router = Router()

themesRoutes(router)

export default router
