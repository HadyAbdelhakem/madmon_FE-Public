import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios"; // If you're using Axios for API calls
import { ProfileResponse } from "@/types/profile";
import { fetchProfile } from "@/api/userApi";

// React Query hook to fetch profile data
export const useProfile = () => {
  return useQuery<ProfileResponse, AxiosError>({
    queryKey: ["profile"], // Query Key
    queryFn: fetchProfile,  // Query function
    staleTime: 1000 * 60 *1,  // Cache for 5 minutes
  });
};
