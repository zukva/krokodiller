import axios from 'axios'

export enum Method {
  Get = 'GET',
  Post = 'POST',
}

const BASE_CONFIG = {
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
}

export class HTTPTransport {
  static API_URL = 'https://ya-praktikum.tech/api/v2';
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  public get(path = '/', config = {}) {
    return axios.get(`${this.endpoint}${path}`, { ...config, ...BASE_CONFIG });
  }

  public post(path: string, data: any = {}, config = {}) {
    return axios.post(`${this.endpoint}${path}`, data, { ...config, ...BASE_CONFIG });
  }
}
