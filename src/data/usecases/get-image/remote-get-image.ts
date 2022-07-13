import { HttpGetClient } from './../../protocols/http/http-get-client';
import { CatImage } from '../../../domain/models/cat';
import { CallApiService } from './../../../domain/usecases/CallApiService';

export class RemoteGetImage implements CallApiService {
  constructor(
    private httpGetClient: HttpGetClient,
    private url: string
  ) {}

  async execute(): Promise<CatImage> {
    const response = await this.httpGetClient.get({
      url: this.url
    })

    return response.data
  }
}
  