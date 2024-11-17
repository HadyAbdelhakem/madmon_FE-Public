// hooks/useSearchUnits.ts

import { useQuery } from '@tanstack/react-query';
import { searchUnits } from '@/api/unit';
import { Filters, MyUnitResponse } from '@/types/unit';

export const useSearchUnits = (filters: Filters) => {
  return useQuery<MyUnitResponse, Error>({
    queryKey: ['searchUnits', filters], // Include filters in queryKey
    queryFn: () => searchUnits(filters), // Pass filters to searchUnits function
    enabled: !!filters, // Only run query if filters are defined
  });
};
