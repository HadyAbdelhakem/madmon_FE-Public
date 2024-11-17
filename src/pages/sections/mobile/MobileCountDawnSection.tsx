"use client";
import React from "react";
import Grid from "@mui/material/Grid2";
import ContentLayout from "@/components/layout/ContentLayout";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl"; // Import useTranslations
import styles from "../../../styles/pages/sections/countDawnSection.module.scss";
import CountdownTimer from "@/components/constant/CountdownTimer";
import CustomButton from "@/components/constant/CustomButton";

const MobileCountDawnSection = () => {
  const t = useTranslations("CountDawnSection"); // Use translations from CountDawnSection
  const targetDate = new Date("December 31, 2024 23:59:59");

  return (
    <ContentLayout>
      <Box className={styles.mobileTimerCard}>
        <Grid container justifyContent={"center"}>
          <Grid>
            <Typography className={styles.mobileTitle}>
              {t("title")}
            </Typography>
          </Grid>
          <Grid size={12} className={styles.mobileCountDownContainer}>
            <CountdownTimer targetDate={targetDate} />
          </Grid>
          <Grid size={9}>
            <Typography className={styles.mobileDescription}>
              {t("description")}
            </Typography>
          </Grid>
          <Grid>
            <CustomButton
              text={t("buttonText")} // Use the translated button text
              width="327px"
              height="42px"
              fontSize="14px"
            />
          </Grid>
        </Grid>
      </Box>
    </ContentLayout>
  );
};

export default MobileCountDawnSection;
