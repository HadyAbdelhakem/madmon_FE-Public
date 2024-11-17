import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { RegisterRequest, RegisterResponse } from '@/types/user';
import { registerUser } from '@/api/userApi';

export const useRegisterUser = () => {
  return useMutation<RegisterResponse, Error, RegisterRequest>({
    mutationFn: registerUser,
    onSuccess: (data) => {
      // Handle successful mutation
      console.log("Registration successful:", data);
    },
    onError: (error) => {
      // Handle error
      if (axios.isAxiosError(error) && error.response) {
        // Log the response body, which might contain validation errors from the server
        console.error("Registration failed with response:", error.response.data);
      } else {
        console.error("Registration failed:", error);
      }
    }
  });
};
