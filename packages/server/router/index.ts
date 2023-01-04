import { Router } from 'express'
import { themesRoutes } from './userTheme'
import { proxyRoutes } from './proxy'

const router: Router = Router()

proxyRoutes(router)
themesRoutes(router)

export default router
