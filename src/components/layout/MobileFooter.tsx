"use client";
import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { useTranslations } from "next-intl"; // Import useTranslations
import Image from "next/image";
import logo from "../../assets/images/light-logo.png";
import Icon1 from "../../assets/images/location.png";
import Icon2 from "../../assets/images/phone.png";
import Icon3 from "../../assets/images/email.png";
import Icon4 from "../../assets/images/in.png";
import Icon5 from "../../assets/images/Instagram.png";
import Icon6 from "../../assets/images/FB.png";

const MobileFooter = () => {
  const t = useTranslations("Footer"); // Use the same translations from Footer

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0512F5",
        bottom: 0,
        width: "100%",
        boxShadow: "0 -1px 5px rgba(0, 0, 0, 0.1)",
        padding: 2,
      }}
    >
      {/* Logo - Centered */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image src={logo} alt="Logo" width={100} height={40} />
      </Box>

      {/* Contact Information - Left Aligned */}
      <Box
        sx={{
          padding: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ marginBottom: 2 }}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, color: "#F2DB00", fontSize: "16px" }}
          >
            {t("contactUs")}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
          <Box sx={{ marginRight: 2 }}>
            <Image src={Icon1} alt="Location" width={24} />
          </Box>
          <Typography variant="body2" style={{ color: "#fff" }}>
            {t("address")}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
          <Box sx={{ marginRight: 2 }}>
            <Image src={Icon2} alt="Phone" />
          </Box>
          <Typography variant="body2" style={{ color: "#fff" }}>
            {t("phone")}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ marginRight: 2 }}>
            <Image src={Icon3} alt="Email" />
          </Box>
          <Typography variant="body2" style={{ color: "#fff", fontSize: "14px" }}>
            {t("email")}
          </Typography>
        </Box>
      </Box>

      {/* Thin Divider */}
      <Divider sx={{ borderColor: "#E0E0E0", marginY: 2, width: "188px" }} />

      {/* Useful Links */}
      <Box
        sx={{
          padding: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ marginBottom: 2 }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: 500, color: "#F2DB00", fontSize: "16px" }}
            >
              {t("usefulLinks")}
            </Typography>
          </Box>

          <Box sx={{ marginBottom: 1 }}>
            <Typography variant="body2" style={{ color: "#fff" }}>
              {t("aboutUs")}
            </Typography>
          </Box>

          <Box sx={{ marginBottom: 1 }}>
            <Typography variant="body2" style={{ color: "#fff" }}>
              {t("privacyPolicy")}
            </Typography>
          </Box>

          <Box sx={{ marginBottom: 1 }}>
            <Typography variant="body2" style={{ color: "#fff" }}>
              {t("support")}
            </Typography>
          </Box>

          <Box>
            <Typography variant="body2" style={{ color: "#fff" }}>
              {t("termsAndConditions")}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            alignItems: "center",
          }}
        >
          <Box sx={{ marginBottom: 1 }}>
            <Image src={Icon4} alt="LinkedIn" width={40} height={40} />
          </Box>
          <Box sx={{ marginBottom: 1 }}>
            <Image src={Icon5} alt="Instagram" width={40} height={40} />
          </Box>
          <Box>
            <Image src={Icon6} alt="Facebook" width={40} height={40} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileFooter;
