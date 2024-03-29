import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import qs from 'qs'

import { ApiTypes } from '../types'
import { DEV_BACKEND_PATH, PROD_BACKEND_PATH } from '../config/api'

type RequestOptions = Partial<Omit<AxiosRequestConfig, 'url'>> & {
  query?: any
  data?: any
}

enum Methods {
  Get = 'get',
  Post = 'post',
  Put = 'put',
  Delete = 'delete',
}

type FetchOptions = Omit<AxiosRequestConfig, 'method | body'>
class Http {
  private readonly basePath: string
  constructor(basePath: string) {
    this.basePath = basePath
  }
  private request<Result>(
    url: string,
    options: RequestOptions
  ): Promise<Result> {
    const isGet = options?.method === Methods.Get
    const fetchUrl = `${this.basePath}${url}${
      options?.query ? `?${qs.stringify(options?.query)}` : ''
    }`

    let data

    if (options.data instanceof FormData) {
      data = options.data
    } else {
      data = JSON.stringify(options.data)
    }

    const headers = {
      'Content-Type': 'application/json',
      ...(options.headers ?? {}),
    }

    return axios({
      url: fetchUrl,
      withCredentials: true,
      ...options,
      headers,
      data: isGet ? undefined : data,
    })
      .then(response => {
        if (response.status === 200) {
          return response.data
        } else {
          throw response
        }
      })
      .catch((error: AxiosError<ApiTypes.BackendError>) => {
        if (error?.response?.data?.reason) {
          throw error.response.data.reason
        }

        throw error
      })
  }

  public get<Query, Result>(
    url: string,
    query?: Query,
    options?: FetchOptions
  ) {
    return this.request<Result>(url, {
      ...options,
      method: Methods.Get,
      query,
    })
  }

  public post<Data, Result>(url: string, data?: Data, options?: FetchOptions) {
    return this.request<Result>(url, {
      ...options,
      method: Methods.Post,
      data,
    })
  }

  public put<Data, Result>(url: string, data?: Data, options?: FetchOptions) {
    return this.request<Result>(url, { ...options, method: Methods.Put, data })
  }

  public delete<Data, Result>(
    url: string,
    data?: Data,
    options?: FetchOptions
  ) {
    return this.request<Result>(url, {
      ...options,
      method: Methods.Delete,
      data,
    })
  }
}

const backendPath = import.meta.env.PROD ? PROD_BACKEND_PATH : DEV_BACKEND_PATH
export const serverApi = new Http(`${backendPath}/api`)
export const prakticumApi = new Http(`${backendPath}/p-api`)

export default Http
