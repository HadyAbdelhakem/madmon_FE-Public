// api/unit.ts

import { Filters, MyUnitResponse, UnitResponse } from '@/types/unit';
import api from "@/utils/apiConfig";
import { getAccessToken } from "@/utils/getAccessToken";

// Function to fetch all units
export const fetchUnits = async (): Promise<UnitResponse> => {
  const response = await api.get('/Live-Units');
  return response.data;
};

// Function to fetch units specific to the authenticated user
export const fetchMyUnits = async (page: number = 1): Promise<MyUnitResponse> => {
    const token = getAccessToken(); // Retrieve the access token
    const response = await api.get(`/profile/units?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Send token in Authorization header
      },
    });
    return response.data; // Return the full response to include pagination metadata
  };
  export const fetchUnitDetails = async (unitReference: string): Promise<UnitResponse> => {
    const response = await api.get(`/unit/${unitReference}`);
    console.log("API Response:", response.data); // Check the structure of the data
    return response.data;
  };
// api/unit.ts



export const searchUnits = async (filters: Filters): Promise<MyUnitResponse> => {
  const response = await api.post('/unit/search', filters);
  return response.data;
};
