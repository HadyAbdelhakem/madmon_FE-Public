// hooks/useTerms.ts

import { useQuery } from '@tanstack/react-query';
import { fetchTermsAndConditions } from '@/api/terms';
import { TermsResponse } from '@/types/terms';

export const useTermsAndConditions = () => {
  return useQuery<TermsResponse, Error>({
    queryKey: ['termsAndConditions'], // The unique key for the query
    queryFn: fetchTermsAndConditions,  // The function to fetch the data
  });
};
