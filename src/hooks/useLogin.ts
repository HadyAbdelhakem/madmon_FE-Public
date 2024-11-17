import { useMutation } from '@tanstack/react-query';
import { login } from '@/api/auth';
import { LoginData, LoginResponse } from '@/types/auth';

export const useLogin = () => {
  return useMutation<LoginResponse, Error, { data: LoginData; rememberMe: boolean }>({
    mutationFn: ({ data, rememberMe }) => login(data, rememberMe),
  });
};
