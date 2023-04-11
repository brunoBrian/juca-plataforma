import axios from 'axios';
import { parseCookies } from 'nookies';

// to get cookie on server side
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getApiClient(ctx?: any) {
  const { 'juca.accesstoken': token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    }
  });

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return api;
}
