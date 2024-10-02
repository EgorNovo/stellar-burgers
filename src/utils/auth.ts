import { setCookie, deleteCookie } from './cookie';

export const setTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem('refreshToken', refreshToken);

  setCookie('accessToken', accessToken);
};

export const removeTokens = () => {
  localStorage.removeItem('refreshToken');
  deleteCookie('accessToken');
};
