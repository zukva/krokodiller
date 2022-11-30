export class WSTransport {
  static API_URL = 'wss://ya-praktikum.tech/ws/chats';

  private io: WebSocket;

  constructor(url: string) {
    this.io = new WebSocket(`${WSTransport.API_URL}${url}`);

    this.io.addEventListener('open', () => {
      console.log('SOCKET OPENED!!1');
    })
  }
}
