import axios from 'axios';

export class API {
  constructor({baseURL = '/api/v1'}) {
    this._baseUrl = baseURL;
    this._endpoint = axios.create({
      baseURL
    });
  }

  async site(url){
    return (await this._endpoint.post('/site', {url}))?.data;
  }
}