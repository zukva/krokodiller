import type { Router } from 'express'
import {
  createProxyMiddleware,
  fixRequestBody,
  responseInterceptor,
} from 'http-proxy-middleware'
import {
  changeUserInterceptor,
} from '../interceptors/user.interceptor'

export const PRACTICUM_API_PATH = 'https://ya-praktikum.tech/api/v2'

const proxyOptions = {
  target: PRACTICUM_API_PATH,
  changeOrigin: true,
  pathRewrite: { '^/p-api': '' },
  cookieDomainRewrite: 'localhost',
  onProxyReq: fixRequestBody,
}

const createOptionsWithInterceptor = (interceptor: any) => ({
  ...proxyOptions,
  selfHandleResponse: true,
  onProxyRes: responseInterceptor(interceptor),
})

const practicumApiProxy = createProxyMiddleware(proxyOptions)
const changeUserApiProxy = createProxyMiddleware(
  createOptionsWithInterceptor(changeUserInterceptor)
)

export const proxyRoutes = (router: Router) => {
  router.use('/p-api/auth/user', changeUserApiProxy)
  router.use('/p-api/user/profile', changeUserApiProxy)
  router.use('/p-api/user/profile/avatar', changeUserApiProxy)
  router.use('/p-api/**', practicumApiProxy)
}
