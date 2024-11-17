import { useQuery } from '@tanstack/react-query';
import { fetchUnitDetails } from '@/api/unit';
import { UnitResponse } from '@/types/unit';

export const useUnitDetails = (unitId: string) => {
  console.log("Fetching unit details for ID:", unitId);
  return useQuery<UnitResponse, Error>({
    queryKey: ['unitDetails', unitId],
    queryFn: () => fetchUnitDetails(unitId),
    enabled: !!unitId,
  
  });
};
