import { createContext, useEffect, useState } from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import Router from 'next/router';

import { getUserInfo, signInRequest } from '../services/Auth';
import { api } from '@services/api';

type User = {
  name: string;
  email: string;
  avatar_url: string;
};

type SignInData = {
  username: string;
  password: string;
};

type RequestStatusType = {
  error: string | null;
  loading: boolean;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signIn: (data: SignInData) => Promise<void>;
  signOut: () => Promise<void>;
  requestStatus: RequestStatusType;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);
  const [requestStatus, setRequestStatus] = useState<RequestStatusType>({
    error: null,
    loading: false
  });

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'juca.accesstoken': token } = parseCookies();

    if (token) {
      getUserInfo()
        .then(response => {
          setUser(response);
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  async function signOut() {
    destroyCookie(null, 'juca.accesstoken');
    Router.push('/');
  }

  async function signIn({ username, password }: SignInData) {
    try {
      setRequestStatus(() => ({ error: null, loading: true }));

      const { access_token } = await signInRequest({
        username,
        password
      });

      setCookie(undefined, 'juca.accesstoken', access_token, {
        maxAge: 60 * 60 * 1 // 1 hour
      });

      api.defaults.headers['Authorization'] = `Bearer ${access_token}`;

      setUser(user);

      Router.push('/produtos');
    } catch (err) {
      setRequestStatus(() => ({
        error: err.response.data.error_description,
        loading: false
      }));
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, requestStatus, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
