import { io } from "socket.io-client";

export class API {
  constructor({baseURL = '/socket.io'}) {
    this._baseUrl = baseURL;
    this._socket = io('ws://127.0.0.1:8080', { transports: ['websocket', 'pulling'] });
    this._socket.once('connect', () => {
      console.log('connected')
    });
  }

  site(url, filterResult = ['trackers'], callback){
    return new Promise((resolve, reject) => {
      const id = Date.now();
      this._socket.emit('site', {url, id, filterResult});
      this._socket.on(`site:${id}`, res => {
        callback(res);
        if (res.status === 200) resolve(res.result);
        else if (res.status >= 400) reject(res);
      });
    });
  }
}