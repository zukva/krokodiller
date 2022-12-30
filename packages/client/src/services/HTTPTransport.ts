import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import qs from 'qs'

import { DEV_SERVER_API_PATH, PRACTICUM_API_PATH } from '../config/api'
import { ApiTypes } from '../types'

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

export const practicumApi = new Http(PRACTICUM_API_PATH)
export const serverApi = new Http(DEV_SERVER_API_PATH)

export default Http
