// api/area.ts
import { AreaResponse } from "@/types/area";
import api from "@/utils/apiConfig";

export const fetchAreas = async (): Promise<AreaResponse> => {
  const response = await api.get('/areas');
  return response.data;
};
