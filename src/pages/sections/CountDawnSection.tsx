// CountDawnSection.js
"use client";
import React from "react";
import Grid from "@mui/material/Grid2";
import ContentLayout from "@/components/layout/ContentLayout";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslations } from "next-intl"; // Import useTranslations
import styles from "../../styles/pages/sections/countDawnSection.module.scss";
import CounterButton from "@/components/ui/CounterButton";
import CountdownTimer from "@/components/constant/CountdownTimer";
import MobileCountDawnSection from "./mobile/MobileCountDawnSection";

const CountDawnSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const t = useTranslations("CountDawnSection"); // Use translations from CountDawnSection
  const targetDate = new Date("December 31, 2024 23:59:59");

  if (isMobile) {
    return <MobileCountDawnSection />;
  }

  return (
    <ContentLayout>
      <Box className={styles.counterCard}>
        <Grid container>
          <Grid size={5}>
            <Grid container>
              <Grid size={12}>
                <Typography className={styles.title}>
                  {t("title")}
                </Typography>
              </Grid>
              <Grid size={12}>
                <Typography className={styles.description}>
                  {t("description")}
                </Typography>
              </Grid>
              <Grid size={12}>
                <CounterButton
                  text={t("buttonText")}
                  width="295px"
                  height="42px"
                  fontSize="16px"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={7} className={styles.countdownContainer}>
            <CountdownTimer targetDate={targetDate} />
          </Grid>
        </Grid>
      </Box>
    </ContentLayout>
  );
};

export default CountDawnSection;
