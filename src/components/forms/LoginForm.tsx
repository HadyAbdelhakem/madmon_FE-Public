"use client";
import React, { useState } from "react";
import { Typography, Link, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useLogin } from "@/hooks/useLogin";
import { useTranslations, useLocale } from "next-intl";
import styles from "../../styles/components/forms/authForm.module.scss";
import PasswordInput from "../constant/PasswordInput";
import CustomCheckbox from "../constant/CustomCheckbox";
import { LoginData } from "@/types/auth";
import { useRouter } from "next/navigation";
import MainButton from "../constant/MainButton";
import { convertArabicToEnglish } from "@/utils/convertArabicToEnglish";
import PhoneNumberInput from "../constant/PhoneNumberInput";
import { isValidPhoneNumber } from "libphonenumber-js";

const LoginForm = () => {
  const t = useTranslations("Login");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>("+20"); // Initialize countryCode state
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [apiError, setApiError] = useState<string>("");

  const router = useRouter();
  const loginMutation = useLogin();

  const handlePhoneChange = (value: string) => {
    const formattedPhone = convertArabicToEnglish(value).replace(/^0+/, ""); // Remove leading zeros
    setPhoneNumber(formattedPhone);

    // Combine the country code with the phone number
    const fullPhoneNumber = `${countryCode}${formattedPhone}`;
    console.log(isValidPhoneNumber(fullPhoneNumber), fullPhoneNumber); // Should return true if valid

    if (isValidPhoneNumber(fullPhoneNumber)) {
      setPhoneError("");
    } else {
      setPhoneError(t("phoneErrorInvalid"));
    }

    // Log the updated full phone number
    console.log("Full Phone Number:", fullPhoneNumber);
  };

  // Handler to update country code
  const handleCountryCodeChange = (code: string) => {
    if (!code.startsWith("+")) {
      code = `+${code}`;
    }
    setCountryCode(code);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let valid = true;
    setApiError("");

    // Combine the country code with the phone number
    const fullPhoneNumber = `${countryCode}${phoneNumber}`;

    if (!phoneNumber) {
      setPhoneError(t("phoneErrorEmpty"));
      valid = false;
    } else if (!isValidPhoneNumber(fullPhoneNumber)) {
      setPhoneError(t("phoneErrorInvalid"));
      valid = false;
    } else {
      setPhoneError("");
    }

    if (!password) {
      setPasswordError(t("passwordErrorEmpty"));
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!valid) {
      return;
    }

    const loginData: LoginData = { phone_number: fullPhoneNumber, password };
    loginMutation.mutate(
      { data: loginData, rememberMe },
      {
        onSuccess: () => {
          router.push("/");
        },
        onError: (error) => {
          setApiError(t("apiError"));
          console.error("Login failed:", error);
        },
      }
    );
  };

  return (
    <Box dir={isRTL ? "rtl" : "ltr"}>
      <Grid container className={styles.formContainer} spacing={2}>
        {/* Mobile Number Field */}
        <Grid size={12}>
          <Typography className={styles.inputLabel}>{t("mobileNumber")}</Typography>
          <Box dir="ltr">
            <PhoneNumberInput
              value={phoneNumber}
              onChange={handlePhoneChange}
              defaultCountry="EG" // Pass default country to your PhoneNumberInput
              error={!!phoneError}
              onCountryCodeChange={handleCountryCodeChange} // Pass handler to update country code
            />
          </Box>

          {phoneError && (
            <Typography className={styles.errorText} color="error">
              {phoneError}
            </Typography>
          )}
        </Grid>

        {/* Password Field */}
        <Grid size={12}>
          <Typography className={styles.inputLabel}>{t("password")}</Typography>
          <PasswordInput
            value={password}
            onChange={handlePasswordChange}
            sx={{
              width: "100%",
              borderColor: passwordError ? "red" : "",
            }}
          />
          {passwordError && (
            <Typography className={styles.errorText} color="error">
              {passwordError}
            </Typography>
          )}
        </Grid>

        {/* API Error Display */}
        {apiError && (
          <Grid size={12}>
            <Typography className={styles.errorText} color="error">
              {apiError}
            </Typography>
          </Grid>
        )}

        {/* Remember Me & Forgot Password */}
        <Grid size={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid size={6}>
              <CustomCheckbox
                checked={rememberMe}
                onChange={(checked) => setRememberMe(checked)}
              />
            </Grid>
            <Grid
              size={6}
              className={styles.forgotLinkContainer}
              display="flex"
              justifyContent="flex-end"
            >
              <Link
                href="/forgot-password"
                underline="hover"
                sx={{
                  fontSize: { xs: "12px", sm: "14px" },
                  color: "black",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {t("forgotPassword")}
              </Link>
            </Grid>
          </Grid>
        </Grid>

        {/* Submit Button */}
        <Grid size={12} className={styles.buttonContainer}>
          <MainButton
            text={t("login")}
            width="100%"
            height="52px"
            fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
            type="submit"
            onClick={handleSubmit}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;
