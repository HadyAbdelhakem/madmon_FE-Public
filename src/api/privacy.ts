// api/privacy.ts

import api from "@/utils/apiConfig";
import { PrivacyPolicyResponse } from "@/types/privacy";

// Function to fetch the privacy policy
export const fetchPrivacyPolicy = async (): Promise<PrivacyPolicyResponse> => {
  const response = await api.get('/privacy-policy');
  return response.data;
};
