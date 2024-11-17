// hooks/useAreas.ts
import { useQuery } from '@tanstack/react-query';
import { fetchAreas } from '@/api/area';
import { AreaResponse } from '@/types/area';

export const useAreas = () => {
  return useQuery<AreaResponse, Error>({
    queryKey: ['areas'], // The unique key for the query
    queryFn: fetchAreas,  // The function to fetch the data
  });
};
