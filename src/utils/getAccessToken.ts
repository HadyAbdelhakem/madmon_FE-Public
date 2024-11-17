import Cookies from "js-cookie";

/**
 * Utility function to get the access token from cookies
 * @returns {string | undefined} - Returns the token or undefined if not found
 */
export const getAccessToken = (): string | undefined => {
  // 'access_token' is the key used to store the token in the cookies
  return Cookies.get("access_token");
};
