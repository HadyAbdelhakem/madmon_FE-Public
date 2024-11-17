import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { EditPasswordRequest, EditPasswordResponse } from "@/types/user";
import { editPassword } from "@/api/userApi";

// Custom hook to handle password editing
export const useEditPassword = (): UseMutationResult<EditPasswordResponse, Error, EditPasswordRequest> => {
  return useMutation<EditPasswordResponse, Error, EditPasswordRequest>({
    mutationFn: editPassword,
    onSuccess: (data) => {
      console.log("Password updated successfully:", data);
      // Handle success (e.g., show success message or redirect)
    },
    onError: (error) => {
      console.error("Error updating password:", error);
      // Handle error (e.g., show error message)
    },
  });
};
