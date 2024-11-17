// api/requestCall.ts
import { RequestCallData } from "@/types/requestCall";
import api from "@/utils/apiConfig"; // Assuming you have a configured API instance with Axios



export const submitRequestCall = async (data: RequestCallData) => {
  try {
    const response = await api.post('/request-call', data);
    return response.data;
  } catch (error) {
    throw error; // Re-throw error for handling in the hook
  }
};
