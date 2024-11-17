"use client";
import React, { useEffect, useRef, useState } from "react";
import { Typography, Box, Container, Input, Snackbar } from "@mui/material";
import MainButton from "../constant/MainButton";
import ResendTimer from "../constant/ResendTimer";
import Done from "../constant/Done";
import { useVerifyUser } from "@/hooks/useVerifyUser";
import { useFormData } from "@/context/FormDataContext";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import BackButton from "../constant/BackButton ";

interface VerifyCodeProps {
  hasBackButton?: boolean;
  onVerifySuccess: () => void;
}

const VerifyCode = ({
  hasBackButton = true,
  onVerifySuccess,
}: VerifyCodeProps) => {
  const t = useTranslations("VerifyCode");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isVerified, setIsVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const router = useRouter();
  const { formData } = useFormData();
  const verifyUser = useVerifyUser();
  console.log(formData,'formDataformDataformDataformData2323');

  // Handle input change for the code inputs
  const handleInputChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newCode = [...code];
      newCode[index] = event.target.value.slice(0, 1);
      setCode(newCode);

      // Focus next input after filling the current one
      if (
        event.target.value &&
        index < code.length - 1 &&
        inputRefs.current[index + 1]
      ) {
        inputRefs.current[index + 1].focus();
      }
    };

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleVerifyCode = () => {
    const fullCode = code.join("");
    if (fullCode.length === code.length) {
      verifyUser.mutate({
        verification_code: fullCode,
        phone_number: formData.phone,
      });
    } else {
      setErrorMessage(t("fillAllFields"));
    }
  };

  useEffect(() => {
    if (verifyUser.isSuccess) {
      setIsVerified(true);
      onVerifySuccess();
  
      setTimeout(() => {
        if (formData.comeFrom === 1) {
          router.push("/set-new-password");
        } else if (formData.comeFrom === 2) {
          router.push("/profile/reset-password");
        } else {
          router.push("/");
        }
      }, 1650);
    } else if (verifyUser.isError) {
      setErrorMessage(t("verificationFailed"));
    }
  }, [verifyUser.isSuccess, verifyUser.isError, onVerifySuccess, router, formData.comeFrom, t]);
  

  return (
    <Container>
      {!isVerified ? (
        <Box sx={{ textAlign: "start", height: "100vh" }}>
          {hasBackButton && <BackButton />}
          <Box
            sx={{
              my: hasBackButton ? 20 : 10,
              marginLeft: isRTL ? "auto" : 15,
              marginRight: isRTL ? 15 : "auto",
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
              sx={{ mb: 2, fontSize: "16px", color: "rgba(32, 32, 32, 0.75)" }}
            >
              {t("description")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                marginBottom: 8,
                marginTop: 5,
                width: "50%",
              }}
            >
              {code.map((value, index) => (
                <Input
                  key={index}
                  value={value}
                  onChange={handleInputChange(index)}
                  inputProps={{
                    "aria-label": t("codeDigit", { index: index + 1 }),
                    maxLength: 1,
                    style: {
                      textAlign: "center",
                      fontSize: "24px",
                      width: "75px",
                    },
                  }}
                  inputRef={(el) => (inputRefs.current[index] = el)}
                />
              ))}
            </Box>
            <ResendTimer />
            <MainButton
              text={t("verifyButton")}
              width="445px"
              height="42px"
              fontSize="16px"
              onClick={handleVerifyCode}
            />
            {errorMessage && (
              <Snackbar
                open={Boolean(errorMessage)}
                autoHideDuration={6000}
                onClose={() => setErrorMessage("")}
                message={errorMessage}
              />
            )}
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Done />
        </Box>
      )}
    </Container>
  );
};

export default VerifyCode;
