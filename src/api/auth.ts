import { LoginData, LoginResponse } from "@/types/auth";
import api from "@/utils/apiConfig";
import { setAuthCookies } from "@/utils/cookieUtils"; // Import the utility function
import { deleteAuthCookies } from "@/utils/cookieUtils"; // Utility function to clear cookies
import { getAccessToken } from "@/utils/getAccessToken";



export const login = async (data: LoginData, rememberMe: boolean): Promise<LoginResponse> => {
  const response = await api.post('/user/login', data);
  const loginResponse: LoginResponse = response.data;


  console.log(rememberMe, 'Remember Me Flag'); // Debugging line

  // Use the utility function to set the cookies
  setAuthCookies(loginResponse.token, loginResponse.data, rememberMe);

  return loginResponse;
};

export const logout = async (): Promise<void> => {
  const token = getAccessToken(); // Retrieve the access token

  // Send the logout request
  await api.post('/user/logout', {}, {
    headers: {
      Authorization: `Bearer ${token}`, // Send token in Authorization header
    },
  });

  // Clear authentication cookies
  deleteAuthCookies();

  console.log("Logout successful");
};