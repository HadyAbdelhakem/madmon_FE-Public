// hooks/usePrivacyPolicy.ts

import { useQuery } from '@tanstack/react-query';
import { fetchPrivacyPolicy } from '@/api/privacy';
import { PrivacyPolicyResponse } from '@/types/privacy';

export const usePrivacyPolicy = () => {
  return useQuery<PrivacyPolicyResponse, Error>({
    queryKey: ['privacyPolicy'], // Unique key for the query
    queryFn: fetchPrivacyPolicy, // Function to fetch data
  });
};
