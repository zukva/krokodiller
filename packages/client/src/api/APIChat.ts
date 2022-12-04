import { HTTPTransport } from "../services/HTTPTransport";

class APIChat {
  private http: HTTPTransport;

  constructor() {
    this.http = new HTTPTransport('/chats');
  }

  public getToken(id: string) {
    return this.http.post(`/token/${id}`)
  }
}

export default new APIChat();
