export interface HttpGetClient {
  get(params: any): Promise<any>
}

export namespace HttpGetClient {
  export type HttpGetParams = {
    url: string
    //headers
    //body?    
  }
}