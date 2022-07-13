import { CatImage } from './../models/cat';

export interface CallApiService {
  execute(): Promise<any>;
}