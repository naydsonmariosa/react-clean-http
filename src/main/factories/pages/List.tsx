import { RemoteGetImage } from '../../../data/usecases/get-image/remote-get-image';
import { AxiosHttpClient } from '../../../infra/http/axios-http-client';
import List from '../../../presentation/pages/List';

export const ListFactory = () => {
  const axiosHttpClient = new AxiosHttpClient();
  const remoteGetImage = new RemoteGetImage(
    axiosHttpClient,
    'https://api.thecatapi.com/v1/images/search'
  );

  return <List callApiService={remoteGetImage} />
}