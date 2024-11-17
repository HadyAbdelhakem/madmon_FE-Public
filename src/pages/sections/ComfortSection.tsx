"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useLocale, useTranslations } from "next-intl"; // Import useTranslations
import styles from "../../styles/pages/sections/DescribeSection.module.scss";
import unit1 from "../../assets/images/comfort-section3.png";
import unit2 from "../../assets/images/comfort-section1.png";
import unit3 from "../../assets/images/comfort-section2.png";
import Image from "next/image";

import ContentLayout from "@/components/layout/ContentLayout";
import CustomButton from "@/components/constant/CustomButton";
import MainButton from "@/components/constant/MainButton";

function ComfortSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const t = useTranslations("ComfortSection"); // Use translations from ComfortSection
  const locale = useLocale(); // Get the current language
  const isRTL = locale === "ar"; // Check if the language is Arabic (RTL)

  return (
    <ContentLayout>
      <Container
        maxWidth="lg"
        disableGutters
        sx={{ padding: 0, marginTop: isMobile ? 7 : 17, marginBottom: isMobile ? 7 : 20 }}
      >
        <Grid container spacing={isMobile ? 2 : 0}>
          {isMobile ? (
            <>
              <Grid item xs={12} sx={{ padding: 0 }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Typography variant="h4" component="h2" className={styles.mobileHeader}>
                    {t("header")}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sx={{ padding: 0 }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Typography variant="body1" className={styles.mobileDescription}>
                    {t("description")}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sx={{ padding: 0 }}>
                <Box sx={{ display: "flex", justifyContent: "center", margin: 2 }}>
                  <Box className={styles.mobileButtonContainer}>
                    <CustomButton
                      text={t("sellButton")}
                      width="328px"
                      height="44px"
                      fontSize="16px"
                    />
                  </Box>
                </Box>
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={4}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: "-12px" }}>
                      <Box sx={{ width: { xs: "100px", md: "185px" }, height: { xs: "100px", md: "240px" }, position: "relative", borderRadius: "16px", overflow: "hidden", marginBottom: 2, boxShadow: 2 }}>
                        <Image src={unit2} alt="Home Example 2" layout="fill" objectFit="cover" />
                      </Box>
                      <Box sx={{ width: { xs: "100px", md: "185px" }, height: { xs: "100px", md: "240px" }, position: "relative", borderRadius: "16px", overflow: "hidden", mt: { xs: 2, md: 0 }, boxShadow: 2 }}>
                        <Image src={unit3} alt="Home Example 3" layout="fill" objectFit="cover" />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Box sx={{ display: "flex", justifyContent: "flex-start", width: "100%", marginLeft: "-12px" }}>
                      <Box sx={{ width: { xs: "200px", md: "306px" }, height: { xs: "300px", md: "497px" }, position: "relative", borderRadius: "16px", overflow: "hidden" }}>
                        <Image src={unit1} alt="Home Example 1" layout="fill" objectFit="cover" />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
      item
      xs={12}
      sm={6}
      sx={{
        padding: 0,
        flexDirection: isRTL ? "row-reverse" : "row", // Reverse row direction for RTL
        display: "flex", // Ensure the layout is flexible
      }}
    >
      <Box
        sx={{
          maxWidth: { lg: "517px" },
          width: "100%",
          marginLeft: isRTL ? "0" : "20px", // Adjust margin for RTL
          marginRight: isRTL ? "20px" : "0", // Add margin to the right for RTL
        }}
      >
        <Typography variant="h4" component="h2" className={styles.header}>
          {t("header")}
        </Typography>
        <Typography variant="body1" className={styles.description}>
          {t("description")}
        </Typography>
        <Box className={styles.buttonContainer}>
          <MainButton
            text={t("sellButton")}
            width="400px"
            height="52px"
            fontSize="18px"
          />
        </Box>
      </Box>
    </Grid>
            </>
          )}
        </Grid>
      </Container>
    </ContentLayout>
  );
}

export default ComfortSection;
