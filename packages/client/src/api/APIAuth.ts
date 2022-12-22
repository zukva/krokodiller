import { HTTPTransport } from '../services/HTTPTransport'

export type typeSignup = {
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
}

export type typeSignin = {
  login: string
  password: string
}

class APIAuth {
  private http: HTTPTransport

  constructor() {
    this.http = new HTTPTransport('/auth')
  }

  public signup(data: typeSignup) {
    return this.http.post('/signup', data)
  }

  public signin(data: typeSignin) {
    return this.http.post('/signin', data)
  }

  public getUser() {
    return this.http.get('/user')
  }

  public logout() {
    return this.http.post('/logout')
  }
}

export default new APIAuth()
