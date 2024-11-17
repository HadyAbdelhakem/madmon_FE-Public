// hooks/useSendOTPCode.ts
import { useMutation } from "@tanstack/react-query";
import { SendOTPRequest, SendOTPResponse } from "@/types/user";
import { sendOTPCode } from "@/api/userApi";

export const useSendOTPCode = () => {
  return useMutation<SendOTPResponse, Error, { data: SendOTPRequest }>({
    mutationFn: ({ data }) => sendOTPCode(data),
  });
};
