import React from "react";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import styles from "../../styles/pages/sections/HeroSection.module.scss";
import ContentLayout from "@/components/layout/ContentLayout";
import SelectionBar from "@/components/ui/SelectionBar";
import NotificationIcon from "@/components/constant/NotificationIcon";
import notificationIcon from "../../assets/images/bell.png";
import CustomPopover from "@/components/ui/CustomPopover";
import NotificationBox from "@/components/constant/NotificationBox";

const HeroSection = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const locale = useLocale();
  const isArabic = locale === "ar";

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "notification-popover" : undefined;

  const textAnimation = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.9 } },
  };

  const searchBarAnimation = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.9 } },
  };

  const t = useTranslations("HeroSection");

  return (
    <div className={styles.heroSection} dir={isArabic ? "rtl" : "ltr"}>
      <ContentLayout>
        <Box className={styles.blurRectangle} />
        <Grid container spacing={4} sx={{ marginTop: 10 }}>
          <Grid size={{ xs: 12, md: 12, lg: 6 }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textAnimation}
            >
              <Box className={styles.textContainer}>
                <Typography variant="h3" className={styles.heroTypography}>
                  {t("title")}
                </Typography>

                <Typography
                  variant="subtitle1"
                  className={styles.heroDescription}
                >
                  {t("subtitle")}
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={searchBarAnimation}
            >
              <SelectionBar />
            </motion.div>
          </Grid>

          <>
            <NotificationIcon
              notificationIcon={notificationIcon}
              onClick={handleClick}
            />

            <CustomPopover
              id={id}
              open={open}
              anchorEl={anchorEl}
              handleClose={handleClose}
            >
              <NotificationBox
                title="Successful Payments"
                time="10:20"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"
                isRead={true}
              />
            </CustomPopover>
          </>
        </Grid>
      </ContentLayout>
    </div>
  );
};

export default HeroSection;
