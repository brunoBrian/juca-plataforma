import { AuthData } from '@services/Session/types';

const STORAGE_KEY_DATA = {
  USER_DATA: '@juca:userData'
};

type SessionType = {
  userData: AuthData | null;
};

export function getSessionStorage(): SessionType {
  const userData = localStorage.getItem(STORAGE_KEY_DATA.USER_DATA);

  return {
    userData: userData ? JSON.parse(userData) : null
  };
}

export function setStoreData<T>(key: keyof typeof STORAGE_KEY_DATA, value: T) {
  return localStorage.setItem(key, JSON.stringify(value));
}

export function removeSessionStorage() {
  localStorage.removeItem(STORAGE_KEY_DATA.USER_DATA);
}
