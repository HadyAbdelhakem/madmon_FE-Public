import React, { useState } from "react";
import { Typography, OutlinedInput, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useLocale, useTranslations } from "next-intl";
import styles from "../../styles/components/forms/authForm.module.scss";
import PasswordInput from "../constant/PasswordInput";
import CustomCheckbox from "../constant/CustomCheckbox";
import CustomLinkCheckbox from "../constant/CustomLinkCheckbox";
import MainButton from "../constant/MainButton";
import WhereGetOtpCodeModal from "../ui/WhereGetOtpCode";
import PhoneNumberInput from "../constant/PhoneNumberInput"; // Import PhoneNumberInput
import { convertArabicToEnglish } from "@/utils/convertArabicToEnglish";
import { isValidPhoneNumber } from "libphonenumber-js";
import { useFormData } from "@/context/FormDataContext";
import { FormData } from "@/types/formData";

const SignUpForm = () => {
  const { formData, updateFormData } = useFormData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [phoneError, setPhoneError] = useState<string>("");
  const t = useTranslations("SignUpForm");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const [countryCode, setCountryCode] = useState<string>("+20");

  const handleChange =
    (field: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
      updateFormData({ [field]: event.target.value });
    };

  const handlePhoneChange = (value: string) => {
    const formattedPhone = convertArabicToEnglish(value).replace(/^0+/, ""); // Remove leading zeros
    const fullPhoneNumber = `${countryCode}${formattedPhone}`;
    updateFormData({ phone: fullPhoneNumber });

    if (isValidPhoneNumber(fullPhoneNumber)) {
      setPhoneError("");
    } else {
      setPhoneError(t("phoneErrorInvalid"));
    }
  };

  const handleCountryCodeChange = (code: string) => {
    if (!code.startsWith("+")) {
      code = `+${code}`;
    }
    setCountryCode(code);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <Grid
      dir={isRTL ? "rtl" : "ltr"}
      container
      className={styles.formContainer}
      spacing={2}
    >
      <Grid size={12}>
        <Typography className={styles.inputLabel}>{t("name")}</Typography>
        <OutlinedInput
          value={formData.name}
          onChange={handleChange("name")}
          className={styles.input}
          placeholder={t("enterYourName")}
          fullWidth
          sx={{ height: "52px" }}
        />
      </Grid>
      <Grid size={12}>
        <Typography className={styles.inputLabel}>{t("mobileNumber")}</Typography>
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
      <Grid size={12}>
        <Typography className={styles.inputLabel}>{t("password")}</Typography>
        <PasswordInput
          value={formData.password}
          onChange={handleChange("password")}
          placeholder={t("enterPassword")}
          sx={{ width: "100%" }}
        />
      </Grid>
      <Grid size={12}>
        <Typography className={styles.inputLabel}>{t("reEnterPassword")}</Typography>
        <PasswordInput
          value={formData.confirmPassword}
          onChange={handleChange("confirmPassword")}
          placeholder={t("confirmPassword")}
          sx={{ width: "100%" }}
        />
      </Grid>
      <Grid size={12}>
        <CustomCheckbox checked={isChecked} onChange={handleCheckboxChange} />
      </Grid>
      <Grid size={12}>
        <CustomLinkCheckbox
          isChecked={isTermsChecked}
          setIsChecked={setIsTermsChecked}
        />
      </Grid>
      <Grid size={12} className={styles.buttonContainer}>
        <MainButton
          text={t("signUp")}
          width="100%"
          height="52px"
          fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
          onClick={openModal}
          disabled={!isTermsChecked}
        />
      </Grid>
      <WhereGetOtpCodeModal open={isModalOpen} handleClose={handleCloseModal} />
    </Grid>
  );
};

export default SignUpForm;
