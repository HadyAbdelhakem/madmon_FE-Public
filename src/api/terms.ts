// api/terms.ts

import api from "@/utils/apiConfig";
import { TermsResponse } from "@/types/terms";

// Function to fetch terms and conditions
export const fetchTermsAndConditions = async (): Promise<TermsResponse> => {
  const response = await api.get('/terms-and-conditions');
  return response.data;
};
