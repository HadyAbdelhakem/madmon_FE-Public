"use client";
import React from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useLocale, useTranslations } from "next-intl"; // Import useTranslations
import Image from "next/image";
import styles from "../../styles/pages/sections/ContactUs.module.scss";
import location from "../../assets/images/location.png";
import phone from "../../assets/images/phone.png";
import email from "../../assets/images/email.png";
import instagram from "../../assets/images/Instagram-fill.png";
import facebook from "../../assets/images/FB-fill.png";
import linkedIn from "../../assets/images/in-fill.png";
import ContentLayout from "@/components/layout/ContentLayout";
import MobileContactUsSection from "./MobileContactUsSection ";

const ContactUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const t = useTranslations("ContactUs"); // Use translations from ContactUs
  const locale = useLocale(); // Get the current language
  const isRTL = locale === "ar"; // Check if the language is Arabic (RTL)


  if (isMobile) {
    return <MobileContactUsSection />;
  }

  return (
    <ContentLayout>
      <Grid
        container
        spacing={2}
        sx={{ height: "600px" }}
        justifyContent={"start"}
        alignContent={"center"}
      >
        {/* First Column */}
        <Grid item xs={12} sm={6}>
          <Grid item container justifyContent="start" alignItems="center">
            <Box className={styles.contactBox}>
              <Box className={styles.contactBoxItem}>
                <Box className={styles.column25}>
                  <Image alt="Location" src={location} width={30} height={30} />
                </Box>
                <Box className={styles.column75}>
                  <Typography className={styles.contactBoxText}>
                    {t("address")}
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.contactBoxItem}>
                <Box className={styles.column25}>
                  <Image alt="Phone" src={phone} width={30} height={30} />
                </Box>
                <Box className={styles.column75}>
                  <Typography className={styles.contactBoxText}>
                    {t("phone")}
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.contactBoxItem}>
                <Box className={styles.column25}>
                  <Image alt="Email" src={email} width={30} height={30} />
                </Box>
                <Box className={styles.column75}>
                  <Typography className={styles.contactBoxText}>
                    {t("email")}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} sm={6}>
      <Grid
        item
        container
        justifyContent="start"
        alignItems="center"
        direction={isRTL ? "row-reverse" : "row"} // Reverse row direction if RTL
      >
        <Box>
          <Box className={styles.contactTextRow}>
            <Typography className={styles.contactTextHeader}>
              {t("header")}
            </Typography>
            <Typography className={styles.contactTextDescription}>
              {t("description")}
            </Typography>
          </Box>
        </Box>

        <Grid
          container
          spacing={0}
          className={styles.iconRow}
          justifyContent="start"
          sx={{ marginTop: "50px", padding: 0, maxWidth: "247px" }}
          direction={isRTL ? "row-reverse" : "row"} // Reverse icon row if RTL
        >
          <Grid item xs={3} sx={{ padding: 0 }}>
            <Box display="flex" alignItems="center" sx={{ padding: 0 }}>
              <Image
                src={linkedIn}
                alt="LinkedIn"
                className={styles.image}
              />
            </Box>
          </Grid>
          <Grid item xs={3} sx={{ padding: 0 }}>
            <Box display="flex" alignItems="center" sx={{ padding: 0 }}>
              <Image
                src={facebook}
                alt="Facebook"
                className={styles.image}
              />
            </Box>
          </Grid>
          <Grid item xs={3} sx={{ padding: 0 }}>
            <Box display="flex" alignItems="center" sx={{ padding: 0 }}>
              <Image
                src={instagram}
                alt="Instagram"
                className={styles.image}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
      </Grid>
    </ContentLayout>
  );
};

export default ContactUs;
