"use client";
import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import styles from "../../../../styles/pages/myAccount.module.scss";
import ActiveButton from "@/components/constant/ActiveButton";
import ProfileCard from "@/components/ui/ProfileCard";
import DownloadTheApp from "@/components/ui/DownloadTheApp";
import ProfileLayout from "@/components/layout/ProfileLayout";
import { useTranslations, useLocale } from "next-intl"; // Import useLocale for language detection

const MyAccount = () => {
  const t = useTranslations("common");
  const locale = useLocale(); // Get the current locale
  const isRTL = locale === "ar"; // Check if the language is Arabic (RTL)

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };




  return (
    <ProfileLayout>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={12} sm={6}>
          {/* Responsive Typography */}
          <Typography
            className={styles.header}
            sx={{
              fontSize: { xs: "18px", sm: "22px" },
              textAlign: { xs: "center", sm: isRTL ? "right" : "left" }, // Align right if Arabic
              mt: { xs: 5, sm: 5, md: 0 },
            }}
          >
            {t("myAccount")}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent={{ xs: "center", sm: "flex-end" }}>
            <ActiveButton
              text={t("activateYourAccount")}
              width="295px"
              height="42px"
              fontSize="16px"
              onClick={handleOpenModal}
            />
            <DownloadTheApp open={isModalOpen} handleClose={handleCloseModal} />
          </Box>
        </Grid>

        <Grid item xs={12} className={styles.profileCardContainer}>
          <ProfileCard />
        </Grid>
      </Grid>
    </ProfileLayout>
  );
};

export default MyAccount;
