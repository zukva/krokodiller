import { store } from "../store";
import { addPoint, addSegment } from "../components/pages/gamePage/elements/CanvasHolder/imageSlice";

export class WSTransport {
  static API_URL = 'wss://ya-praktikum.tech/ws/chats';

  private io: WebSocket;
  private userId: string;

  constructor(url: string) {
    this.io = new WebSocket(`${WSTransport.API_URL}${url}`);
    this.userId = url.split('/')[1];

    this.io.addEventListener('open', () => {
      console.log('SOCKET OPENED!!1');
    });
    this.io.addEventListener('close', (e) => {
      console.log(e);
      console.log('SOCKET CLOSED!!1');
    });
    this.io.addEventListener('message', (evt: MessageEvent) => {
      const { user_id, content: { add: type, point } } = JSON.parse(evt.data);
      if (user_id !== this.userId) {
        switch (type) {
          case 'point':
            store.dispatch(addPoint(point));
            break;
          case 'segment':
            store.dispatch(addSegment(point));
            break;
          default:
        }
      }
    })
  }

  public send(content: any, type: string) {
    this.io.send(JSON.stringify({
      type,
      content,
    }))
  }
}
