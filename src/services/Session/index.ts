import { api } from '@services/api';
import endpoints from './endpoints.json';

export async function authLogin({ username, password }) {
  const url = endpoints.authToken;

  const data = {
    grant_type: 'password',
    client_id: '7aea4d22-58c7-41ca-9fa6-62b88e9368df',
    client_secret: 'WpsX8RfwM9LIE5bKYVkJs3hOIQj3hMjI',
    username,
    password
  };

  const result = await api.post(url, data);

  return result.data;
}
