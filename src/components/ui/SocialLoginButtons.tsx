import React from "react";
import { Box, Divider, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useTranslations } from "next-intl"; // Import useTranslations
import googleIcon from "../../assets/images/Google-icon.png";
import apple from "../../assets/images/apple-icon.png";

const SocialLoginButtons = () => {
  const t = useTranslations("SocialLogin"); // Initialize the translation hook with a namespace

  return (
    <Box sx={{ position: "relative", textAlign: "center", width: "100%" }}>
      {/* OR text and divider container */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
          padding: { xs: "0px 20px", md: "0px 100px" }, // Adjust padding for responsiveness
        }}
      >
        <Divider flexItem sx={{ flexGrow: 1, borderColor: "#E8E9ED" }} />
        <Typography
          variant="body2"
          sx={{
            color: "#000",
            background: "#FFF", // Assuming the background is white
            mx: 2, // Horizontal margin to space the divider and text
            fontSize: { xs: "14px", md: "16px" }, // Adjust font size for responsiveness
          }}
        >
          {t("or")} {/* Translated "OR" text */}
        </Typography>
        <Divider flexItem sx={{ flexGrow: 1, borderColor: "#E8E9ED" }} />
      </Box>

      {/* Google login button */}
      <Button
        variant="outlined"
        startIcon={
          <Image
            src={googleIcon}
            alt={t("googleSignIn")} // Translated alt text
            width={20}
            height={20}
            style={{ marginRight: 5 }}
          />
        }
        fullWidth
        sx={{
          my: 1, // Margin top and bottom for spacing
          alignItems: "center",
          height: "56px",
          width: { xs: "90%", sm: "80%", md: "445px" }, // Set wider width on mobile (90%) and smaller screens (80%)
          borderRadius: "8px",
          borderColor: "#CFD6E4",
          fontSize: { xs: "14px", md: "16px" }, // Adjust font size for responsiveness
          marginLeft: { xs: "auto", md: "auto" }, // Center the button on mobile and larger screens
          marginRight: { xs: "auto", md: "auto" }, // Center the button on mobile and larger screens
        }}
      >
        {t("continueWithGoogle")} {/* Translated "Continue with Google" text */}
      </Button>

      {/* Apple login button */}
      <Button
        variant="outlined"
        startIcon={
          <Image
            src={apple}
            alt={t("appleSignIn")} // Translated alt text
            width={20}
            height={22}
            style={{ marginRight: 5 }}
          />
        }
        fullWidth
        sx={{
          my: 1, // Margin top and bottom for spacing
          alignItems: "center",
          height: "56px",
          width: { xs: "90%", sm: "80%", md: "445px" }, // Set wider width on mobile (90%) and smaller screens (80%)
          borderRadius: "8px",
          borderColor: "#CFD6E4",
          fontSize: { xs: "14px", md: "16px" }, // Adjust font size for responsiveness
          marginLeft: { xs: "auto", md: "auto" }, // Center the button on mobile and larger screens
          marginRight: { xs: "auto", md: "auto" }, // Center the button on mobile and larger screens
        }}
      >
        {t("continueWithApple")} {/* Translated "Continue with Apple" text */}
      </Button>
    </Box>
  );
};

export default SocialLoginButtons;
