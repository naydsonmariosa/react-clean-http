import { HttpGetClient } from './../../data/protocols/http/http-get-client';
import axios, {AxiosResponse} from 'axios'

export class AxiosHttpClient implements HttpGetClient {
  async get(params: any): Promise<any> {
    let axiosResponse: AxiosResponse;

    axiosResponse = await axios.get(params.url);
    return axiosResponse;
  }

}