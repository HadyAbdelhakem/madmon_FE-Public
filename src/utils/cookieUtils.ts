import { setCookie } from 'cookies-next';
import { deleteCookie } from 'cookies-next';


export const setAuthCookies = (token: string, user: unknown, rememberMe: boolean) => {
  if (rememberMe) {
    // Set a persistent cookie (e.g., 30 days)
    setCookie('access_token', token, { maxAge: 30 * 24 * 60 * 60, path: '/' });
    setCookie('user', JSON.stringify(user), { maxAge: 30 * 24 * 60 * 60, path: '/' });
  } else {
    // Set a session cookie (expires when the browser is closed)
    setCookie('access_token', token, { path: '/' });
    setCookie('user', JSON.stringify(user), { path: '/' });
  }
};
export const deleteAuthCookies = (): void => {
  deleteCookie("access_token");
  deleteCookie("user");
}
