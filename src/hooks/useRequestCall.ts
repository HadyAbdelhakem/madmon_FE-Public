// hooks/useRequestCall.ts
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { RequestCallData } from '@/types/requestCall';
import { submitRequestCall } from '@/api/requestCall';

export const useRequestCall = () => {
  return useMutation<void, Error, RequestCallData>({
    mutationFn: submitRequestCall,
    onSuccess: () => {
      console.log("Request call submitted successfully.");
    },
    onError: (error) => {
      if (axios.isAxiosError(error) && error.response) {
        console.error("Request call failed with response:", error.response.data);
      } else {
        console.error("Request call failed:", error);
      }
    }
  });
};
