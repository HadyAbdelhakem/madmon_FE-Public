"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl"; // Import useTranslations
import Image from "next/image";
import styles from "../../styles/pages/sections/ContactUs.module.scss";
import location from "../../assets/images/location.png";
import phone from "../../assets/images/phone.png";
import email from "../../assets/images/email.png";
import instagram from "../../assets/images/Instagram.svg";
import facebook from "../../assets/images/FB.svg";
import linkedIn from "../../assets/images/in.svg";
import ContentLayout from "@/components/layout/ContentLayout";
import Grid from "@mui/material/Grid2";

const MobileContactUsSection = () => {
  const t = useTranslations("ContactUs"); // Use translations from ContactUs

  return (
    <ContentLayout>
      <Grid container justifyContent={"center"}>
        <Grid size={11}>
          <Typography className={styles.mobileContactTextHeader}>
            {t("header")}
          </Typography>
        </Grid>
        <Grid size={11} className={styles.mobileContactBoxContainer}>
          <Box className={styles.mobileContactBox}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              sx={{ maxWidth: 285, margin: "0 auto", height: "100%" }}
            >
              {/* First Row */}
              <Grid size={1}>
                <Image alt="Location" src={location} width={20} height={20} />
              </Grid>
              <Grid size={9}>
                <Typography className={styles.mobileContactBoxText}>
                  {t("address")}
                </Typography>
              </Grid>
              <Grid size={2} className={styles.mobileIconContainer}>
                <Image alt={t("linkedInAlt")} src={linkedIn} width={30} height={30} />
              </Grid>
              
              {/* Second Row */}
              <Grid size={1}>
                <Image alt="Phone" src={phone} width={20} height={20} />
              </Grid>
              <Grid size={9}>
                <Typography className={styles.mobileContactBoxText}>
                  {t("phone")}
                </Typography>
              </Grid>
              <Grid size={2} className={styles.mobileIconContainer}>
                <Image alt={t("instagramAlt")} src={instagram} width={30} height={30} />
              </Grid>

              {/* Third Row */}
              <Grid size={1}>
                <Image alt="Email" src={email} width={20} height={20} />
              </Grid>
              <Grid size={9}>
                <Typography className={styles.mobileContactBoxText}>
                  {t("email")}
                </Typography>
              </Grid>
              <Grid size={2} className={styles.mobileIconContainer}>
                <Image alt={t("facebookAlt")} src={facebook} width={30} height={30} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </ContentLayout>
  );
};

export default MobileContactUsSection;
