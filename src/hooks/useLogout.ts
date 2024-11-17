import { useMutation } from '@tanstack/react-query';
import { logout } from '@/api/auth';

export const useLogout = () => {
  return useMutation<void, Error>({
    mutationFn: logout,
    onSuccess: () => {
      console.log("Successfully logged out");
      // Redirect or perform other actions after logout
    },
    onError: (error) => {
      console.error("Logout failed:", error);
    },
  });
};
