import { io } from "socket.io-client";

export class API {
  constructor({baseURL = '/socket'}) {
    this._baseUrl = baseURL;
    this._socket = io(this._baseUrl, { transports: ['websocket', 'polling'] });
  }

  site(url, filterResult = ['trackers']){
    return new Promise(resolve => {
      const id = Date.now();
      this._socket.emit('site', {url, id, filterResult});
      this._socket.once(`site:${id}`, resolve);
    });
  }
}