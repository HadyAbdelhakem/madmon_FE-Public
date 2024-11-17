import React, { useState, useEffect } from "react";
import Link from "@mui/material/Link";
import { useSendOTPCode } from "@/hooks/useSendOTPCode"; // Import the OTP sending hook
import { useFormData } from "@/context/FormDataContext"; // Import the form data context
import { useTranslations } from "next-intl"; // Import useTranslations for translations
import axios from "axios";



const ResendTimer = () => {
  const t = useTranslations("ResendTimer"); // Initialize the translation function
  const [countdown, setCountdown] = useState(120); // 120 seconds for 2 minutes
  const [isDisabled, setIsDisabled] = useState(true); // State to enable/disable the Resend link

  // Access the form data context to get the phone number
  const { formData } = useFormData();
  const phoneNumber = formData?.phone || ""; // Assuming phone is stored in formData
  console.log(phoneNumber, "phoneNumber");

  // Use the OTP sending hook
  const { mutate: sendOTP } = useSendOTPCode();

  // Timer logic to enable/disable resend button
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000); // Fixed timer interval to 1000ms (1 second)
      return () => clearTimeout(timer);
    } else {
      setIsDisabled(false);
    }
  }, [countdown]);

  // Handle resend click, trigger OTP sending
  const handleResendClick = () => {
    if (!isDisabled && phoneNumber) {
      // Log the request data to ensure phone number is present
      console.log("Sending OTP with the following data:", { phone_number: phoneNumber });

  sendOTP(
  {
    data: { phone_number: phoneNumber },
  },
  {
    onSuccess: (data) => {
      console.log("OTP sent successfully:", data);
      setCountdown(120); // Reset the countdown timer
      setIsDisabled(true); // Disable the button until the timer resets
    },
    onError: (error: unknown) => {
      if (axios.isAxiosError(error)) {
        // Now TypeScript knows it's an AxiosError and has a `response` property
        console.error("Failed to send OTP:", error.response?.data); // Log the error response data
      } else {
        console.error("An unexpected error occurred:", error);
      }
    },
  }
);
      
    }
  };

  return (
    <div style={{ fontSize: "14px", marginBottom: "30px", fontWeight: "500" }}>
      {t("didNotReceiveCode")}{" "}
      <Link
        component="button"
        onClick={handleResendClick}
        sx={{
          color: isDisabled ? "grey" : "#FF0000",
          fontWeight: 500,
          cursor: isDisabled ? "default" : "pointer",
          padding: 0,
          textDecoration: "none",
          "&:hover": isDisabled ? {} : { textDecoration: "underline" },
        }}
      >
        {t("resend")}
      </Link>
      {isDisabled &&
        ` 0${Math.floor(countdown / 60)}:${
          countdown % 60 < 10 ? `0${countdown % 60}` : countdown % 60
        }`}
    </div>
  );
};

export default ResendTimer;
