import React, { useState } from "react";
import { Typography, Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl"; // Import useLocale
import styles from "../../styles/components/forms/authForm.module.scss";
import MainButton from "../constant/MainButton";
import { useSendOTPCode } from "@/hooks/useSendOTPCode";
import PhoneNumberInput from "../constant/PhoneNumberInput";
import { convertArabicToEnglish } from "@/utils/convertArabicToEnglish";
import { isValidPhoneNumber } from "libphonenumber-js";
import { useFormData } from "@/context/FormDataContext";
import BackButton from "../constant/BackButton ";

const ForgotPassword = () => {
  const t = useTranslations("ForgotPassword");
  const locale = useLocale(); // Get the current locale
  const isRTL = locale === "ar"; // Check if the current locale is Arabic

  const { formData, updateFormData } = useFormData();
  const [countryCode, setCountryCode] = useState<string>("+20");
  const [phoneError, setPhoneError] = useState<string>("");
  const sendOTPCodeMutation = useSendOTPCode();
  const router = useRouter();

  // Handle phone number change
  const handlePhoneChange = (value: string) => {
    const formattedPhone = convertArabicToEnglish(value).replace(/^0+/, "");
    const fullPhoneNumber = `${countryCode}${formattedPhone}`;

    updateFormData({ phone: fullPhoneNumber });

    if (isValidPhoneNumber(fullPhoneNumber)) {
      setPhoneError("");
    } else {
      setPhoneError(t("invalidPhoneNumber"));
    }

    console.log("Full Phone Number:", fullPhoneNumber);
  };

  // Handler to update country code
  const handleCountryCodeChange = (code: string) => {
    if (!code.startsWith("+")) {
      code = `+${code}`;
    }
    setCountryCode(code);
  };

  // Handle form submission to send OTP
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fullPhoneNumber = formData.phone;

    if (!formData.phone || !isValidPhoneNumber(fullPhoneNumber)) {
      setPhoneError(t("invalidPhoneNumber"));
      return;
    }

    sendOTPCodeMutation.mutate(
      { data: { phone_number: fullPhoneNumber } },
      {
        onSuccess: (data) => {
          console.log("OTP sent successfully:", data);
          router.push("/verify-code");
        },
        onError: (error) => {
          console.error("Failed to send OTP:", error);
          setPhoneError(t("otpError"));
        },
      }
    );
  };

  return (
    <Container>
      <Box sx={{ textAlign: "start", height: "100vh" }}>
        {/* Set the direction based on the locale */}
        <BackButton />
        <Box
          sx={{
            my: 20,
            marginLeft: isRTL ? "auto" : 15, // Adjust margin for RTL
            marginRight: isRTL ? 15 : "auto", // Adjust margin for RTL
            fontSize: "26px",
            color: "black",
            fontWeight: 800,
            width: "445px",
          }}
          dir={isRTL ? "rtl" : "ltr"}
        >
          <Typography
            variant="h5"
            component="h1"
            sx={{ fontSize: "26px", color: "black", fontWeight: 600 }}
            gutterBottom
          >
            {t("title")}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 2, fontSize: "16px", color: "#A2A7AF" }}
          >
            {t("description")}
          </Typography>
          <Grid size={12}>
            <Typography className={styles.inputLabel}>
              {t("mobileNumber")}
            </Typography>
            <Box dir="ltr">
              <PhoneNumberInput
                value={formData.phone ? formData.phone.replace(countryCode, "") : ""}
                onChange={handlePhoneChange}
                defaultCountry="EG"
                error={!!phoneError}
                onCountryCodeChange={handleCountryCodeChange}
              />
            </Box>
            {phoneError && (
              <Typography className={styles.errorText} color="error">
                {phoneError}
              </Typography>
            )}
          </Grid>
          <Box component="form" onSubmit={handleSubmit} sx={{ marginTop: 5 }}>
            <MainButton
              text={t("sendButton")}
              width="445px"
              height="42px"
              fontSize="16px"
              type="submit"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
