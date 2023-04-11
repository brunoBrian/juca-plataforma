import { api } from '@services/api';
import endpoints from './endpoints.json';
import * as types from './types';

export async function signInRequest({ username, password }) {
  const url = endpoints.authToken;

  const data = {
    grant_type: 'password',
    client_id: '7aea4d22-58c7-41ca-9fa6-62b88e9368df',
    client_secret: 'WpsX8RfwM9LIE5bKYVkJs3hOIQj3hMjI',
    username,
    password
  };

  const result = await api.post<types.AuthData>(url, data);

  return result.data;
}

export async function getUserInfo() {
  const url = endpoints.userInfo;

  const result = await api.get<types.UserInfo>(url);

  return result.data;
}
