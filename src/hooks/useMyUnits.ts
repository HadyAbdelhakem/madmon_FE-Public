// hooks/useMyUnits.ts

import { useQuery } from '@tanstack/react-query';
import { fetchMyUnits } from '@/api/unit';
import { MyUnitResponse } from '@/types/unit';

export const useMyUnits = (page: number = 1) => {
  return useQuery<MyUnitResponse, Error>({
    queryKey: ['myUnits', page], // Include page in queryKey
    queryFn: ({ queryKey }) => {
      const [, page] = queryKey; // Destructure page from queryKey
      return fetchMyUnits(page as number); // Pass page to fetchMyUnits
    },
  });
};
