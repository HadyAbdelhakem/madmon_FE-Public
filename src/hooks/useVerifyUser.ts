import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { verifyUser } from "@/api/userApi"; // Import your API call function
import { VerifyRequest, VerifyResponse } from "@/types/user";
import { setAuthCookies } from "@/utils/cookieUtils";

export const useVerifyUser = () => {
  return useMutation<VerifyResponse, AxiosError, VerifyRequest>({
    mutationFn: verifyUser,
    onSuccess: (data) => {
      // Extract token, userData, and message from the response
      const { token, data: userData, message } = data;

      // Log the token and user data for debugging
      console.log("Token:", token);
      console.log("User Data:", userData);

      // Check if token and userData are available
      if (token && userData) {
        const rememberMe = true; // You can adjust this based on your logic

        // Store the token and user data in cookies
        setAuthCookies(token, userData, rememberMe);

        // Log the success message
        console.log("Verification successful:", message);
      } else {
        console.error("Token or user data is missing in the response.");
      }
    },
    onError: (error: AxiosError) => {
      if (axios.isAxiosError(error)) {
        // Handle Axios errors
        if (error.response) {
          console.error("Verification failed with server response:", error.response.data);
        } else {
          console.error("Verification failed with no response:", error.message);
        }
      } else {
        console.error("Unexpected error:", error);
      }
    }
  });
};
