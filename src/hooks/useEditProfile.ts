import { useMutation, useQueryClient } from '@tanstack/react-query';
import { setCookie } from 'cookies-next'; // Import from cookies-next
import axios from 'axios';
import { EditProfileRequest, EditProfileResponse } from '@/types/user';
import { editProfile } from '@/api/userApi';

export const useEditProfile = () => {
  const queryClient = useQueryClient();

  return useMutation<EditProfileResponse, Error, EditProfileRequest>({
    mutationFn: editProfile,
    onSuccess: (data) => {
      // Update the React Query cache with the new profile data
      queryClient.setQueryData(['currentUser'], data);

      // Update the user cookie using cookies-next
      setCookie('user', JSON.stringify(data), { maxAge: 60 * 60 * 24 * 7 }); // Set cookie to expire in 7 days

      console.log('Profile updated successfully:', data);
    },
    onError: (error) => {
      // Handle error responses
      if (axios.isAxiosError(error) && error.response) {
        console.error('Profile update failed with response:', error.response.data);
      } else {
        console.error('Profile update failed:', error);
      }
    },
  });
};
