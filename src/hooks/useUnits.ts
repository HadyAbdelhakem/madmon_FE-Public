// hooks/useUnits.ts
import { useQuery } from '@tanstack/react-query';
import { fetchUnits } from '@/api/unit';
import { UnitResponse } from '@/types/unit';

export const useUnits = () => {
  return useQuery<UnitResponse, Error>({
    queryKey: ['units'], // The unique key for the query
    queryFn: fetchUnits,  // The function to fetch the data
  });
};
