// utils/authUtils.ts
import { getCookie } from 'cookies-next';

/**
 * Function to check if the access token exists
 * @returns {boolean} - Returns true if the token exists, false otherwise
 */
export const isAccessTokenExist = (): boolean => {
  const token = getCookie('access_token'); // Get the access token from cookies
  return Boolean(token); // Return true if token exists, false otherwise
};
