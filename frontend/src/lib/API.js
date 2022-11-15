import { io } from "socket.io-client";

export class API {
  constructor({baseURL = '/socket.io'}) {
    this._baseUrl = baseURL;
    this._socket = io({ transports: ['websocket', 'pulling'] });
    this._socket.once('connect', () => {
      console.log('connected')
    });
  }

  site(url, filterResult = ['trackers', 'trackersNotLoaded'], callback){
    return new Promise((resolve, reject) => {
      const id = Date.now();
      this._socket.emit('site', {url, id, filterResult});
      let handler = res => {
        callback(res);
        if (res.status === 200) return resolve({url:res.url, ...res.result});
        else if (res.status >= 400) return reject(res);
        this._socket.once(`site:${id}`, handler);
      }
      this._socket.once(`site:${id}`, handler);
    });
  }
}