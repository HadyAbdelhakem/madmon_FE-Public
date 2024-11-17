"use client";
import React from "react";
import { Box, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import styles from "../../styles/pages/sections/DescribeSection.module.scss";
import unit1 from "../../assets/images/describe-section1.png";
import unit2 from "../../assets/images/describe-section2.png";
import unit3 from "../../assets/images/describe-section3.png";
import Image from "next/image";
import ContentLayout from "@/components/layout/ContentLayout";
import CustomButton from "@/components/constant/CustomButton";
import MainButton from "@/components/constant/MainButton";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

function DescribeSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const t = useTranslations("DescribeSection"); // Hook to get translations
  const locale = useLocale(); // Get current locale
  const isArabic = locale === "ar"; // Check if the current locale is Arabic
  const isRTL = locale === "ar"; // Check if the language is Arabic (RTL)


  return (
    <Box
      className={styles.describeContainer}
      dir={isArabic ? "rtl" : "ltr"} // Apply RTL for Arabic
      sx={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        padding: 0,
        margin: 0,
      }}
    >
      <ContentLayout>
        <Container
          maxWidth="lg"
          disableGutters
          sx={{
            padding: 0,
            marginTop: isMobile ? 7 : 17,
            marginBottom: isMobile ? 7 : 20,
          }}
        >
          <Grid container spacing={isMobile ? 2 : 0}>
            {isMobile ? (
              <>
                {/* Header Row */}
                <Grid item xs={12} sx={{ padding: 0 }}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography variant="h4" component="h2" className={styles.mobileHeader}>
                      {t("title")}
                    </Typography>
                  </Box>
                </Grid>

                {/* Description Row */}
                <Grid item xs={12} sx={{ padding: 0 }}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography variant="body1" className={styles.mobileDescription}>
                      {t("description")}
                    </Typography>
                  </Box>
                </Grid>

                {/* Image Row */}
                <Grid item xs={12} sx={{ padding: 0 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "127px",
                      width: "100%",
                      position: "relative",
                      borderRadius: "16px",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        height: "127px",
                        width: "328px",
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                        borderRadius: "16px",
                      }}
                    >
                      <Image
                        src={unit1}
                        alt="Home Example 1"
                        layout="fill"
                        objectFit="cover"
                        className={styles.mobileImage}
                      />
                    </Box>
                  </Box>
                </Grid>

                {/* Button Row */}
                <Grid item xs={12} sx={{ padding: 0 }}>
                  <Box sx={{ display: "flex", justifyContent: "center", margin: 2 }}>
                    <Box className={styles.mobileButtonContainer}>
                      <CustomButton
                        text={t("buttonText")}
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
                {/* Desktop Layout */}
                <Grid item xs={12} sm={6} sx={{ padding: 0 }}>
                  <Box sx={{ maxWidth: { lg: 550 }, width: "100%", marginRight: "20px" }}>
                    <Typography variant="h4" component="h2" className={styles.header}>
                      {t("title")}
                    </Typography>
                    <Typography variant="body1" className={styles.description}>
                      {t("description")}
                    </Typography>

                    <Box className={styles.buttonContainer}>
                      <MainButton
                        text={t("buttonText")}
                        width="400px"
                        height="52px"
                        fontSize="18px"
                      />
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
      <Grid container spacing={2} direction={isRTL ? "row-reverse" : "row"}> {/* Reverse the row for RTL */}
        {/* Image Box 1 */}
        <Grid item xs={6} md={6}>
          <Box sx={{ display: "flex", justifyContent: isRTL ? "flex-end" : "flex-start", width: "100%" }}>
            <Box
              sx={{
                width: { xs: "200px", md: "306px" },
                height: { xs: "300px", md: "497px" },
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <Image src={unit1} alt="Home Example 1" layout="fill" objectFit="cover" />
            </Box>
          </Box>
        </Grid>

        {/* Image Box 2 & 3 */}
        <Grid item xs={6} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: isRTL ? "flex-start" : "flex-end", // Adjust alignment for RTL
            }}
          >
            <Box
              sx={{
                width: { xs: "100px", md: "185px" },
                height: { xs: "100px", md: "240px" },
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                marginBottom: 2,
                boxShadow: 2,
              }}
            >
              <Image src={unit2} alt="Home Example 2" layout="fill" objectFit="cover" />
            </Box>

            <Box
              sx={{
                width: { xs: "100px", md: "185px" },
                height: { xs: "100px", md: "240px" },
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                mt: { xs: 2, md: 0 },
                boxShadow: 2,
              }}
            >
              <Image src={unit3} alt="Home Example 3" layout="fill" objectFit="cover" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
              </>
            )}
          </Grid>
        </Container>
      </ContentLayout>
    </Box>
  );
}

export default DescribeSection;
