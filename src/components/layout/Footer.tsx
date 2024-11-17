"use client";
import React from "react";
import { Box, Typography, Divider, useTheme, useMediaQuery } from "@mui/material";
import { useTranslations, useLocale } from "next-intl"; // Import useTranslations and useLocale
import Image from "next/image";
import Logo from "../../assets/images/light-logo.png";
import arabicLogo from "../../assets/images/arabic-light-logo.png";
import Icon1 from "../../assets/images/Vector (7).svg";
import Icon2 from "../../assets/images/Vector (8).svg";
import Icon3 from "../../assets/images/Vector (9).svg";
import Icon4 from "../../assets/images/in.png";
import Icon5 from "../../assets/images/Instagram.png";
import Icon6 from "../../assets/images/FB.png";
import MobileFooter from "./MobileFooter";
import Link from "next/link";

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const t = useTranslations("Footer"); // Use translations from Footer
  const locale = useLocale(); // Get the current locale
  const isRTL = locale === "ar"; // Check if the language is Arabic (RTL)

  if (isMobile) {
    return <MobileFooter />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        borderTop: "1px solid #F2DB00",
        backgroundColor: "#0512F5",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "stretch",
          width: "70%",
          maxWidth: 1200,
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            flex: 1,
            padding: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Box sx={{ marginTop: "auto" }}>
            <Image src={isRTL ? arabicLogo : Logo} alt="Logo" width={150} /> {/* Conditionally render the logo */}
          </Box>
        </Box>

        <Divider orientation="vertical" flexItem sx={{ borderColor: "#E0E0E0", marginX: 2 }} />

        <Box
          sx={{
            flex: 1,
            padding: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 500, color: "#F2DB00", fontSize: "16px" }}>
              {t("contactUs")}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
            <Box sx={{ marginLeft: isRTL ? 2 : 0, marginRight: isRTL ? 0 : 2 }}>
              <Image src={Icon1} alt="Location" />
            </Box>
            <Typography variant="body2" style={{ color: "#fff" }}>
              {t("address")}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
            <Box sx={{ marginLeft: isRTL ? 2 : 0, marginRight: isRTL ? 0 : 2 }}>
              <Image src={Icon2} alt="Phone" />
            </Box>
            <Typography variant="body2" style={{ color: "#fff" }}>
              {t("phone")}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ marginLeft: isRTL ? 2 : 0, marginRight: isRTL ? 0 : 2 }}>
              <Image src={Icon3} alt="Email" />
            </Box>
            <Typography variant="body2" style={{ color: "#fff", fontSize: "14px" }}>
              {t("email")}
            </Typography>
          </Box>
        </Box>

        <Divider orientation="vertical" flexItem sx={{ borderColor: "#E0E0E0", marginX: 2 }} />

        <Box
          sx={{
            flex: 1,
            padding: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 500, color: "#F2DB00", fontSize: "16px" }}>
              {t("usefulLinks")}
            </Typography>
          </Box>

          <Box sx={{ marginBottom: 1 }}>
            <Typography variant="body2" style={{ color: "#fff" }}>
              {t("aboutUs")}
            </Typography>
          </Box>

          <Box sx={{ marginBottom: 1 }}>
          <Link href="/privacy" passHref style={{textDecoration:'none'}}>
        <Typography
          variant="body2"
          style={{
            color: "#fff",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          {t("privacyPolicy")}
        </Typography>
      </Link>
          </Box>

          <Box sx={{ marginBottom: 1 }}>
            <Typography variant="body2" style={{ color: "#fff" }}>
              {t("support")}
            </Typography>
          </Box>


          <Box>
          <Link href="/terms" passHref style={{textDecoration:'none'}}>
            <Typography variant="body2" style={{ color: "#fff" }}  >
              {t("termsAndConditions")}
            </Typography>
            </Link>
          </Box>
        
        </Box>

        <Divider orientation="vertical" flexItem sx={{ borderColor: "#E0E0E0", marginX: 2 }} />

        <Box
          sx={{
            flex: 1,
            padding: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            height: "100%",
            alignSelf: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              height: "100%",
            }}
          >
            <Box sx={{ cursor: "pointer" }}>
              <Image src={Icon4} alt="LinkedIn" width={30} />
            </Box>

            <Box sx={{ cursor: "pointer" }}>
              <Image src={Icon5} alt="Instagram" width={30} />
            </Box>

            <Box sx={{ cursor: "pointer" }}>
              <Image src={Icon6} alt="Facebook" width={30} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
