import React, { useState } from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";
import QRCode from "react-qr-code";
import { useTranslations } from "next-intl"; // Import useTranslations
import styles from "../../styles/components/ui/DownloadTheApp.module.scss";
import DownloadButton from "../constant/DownloadButton";
import googlePlay from "../../assets/images/Google_Play-Logo.svg";
import appleStore from "../../assets/images/apple_appstore_logo.svg";

interface DownloadTheAppProps {
  open: boolean;
  handleClose: () => void;
}

const DownloadTheApp: React.FC<DownloadTheAppProps> = ({ open, handleClose }) => {
  const t = useTranslations("DownloadTheApp"); // Initialize the translation function
  const [qrCodeUrl, setQrCodeUrl] = useState("https://www.your-app-link.com");
  const [isQrCodeVisible, setIsQrCodeVisible] = useState(false);

  const handleExpandClick = () => {
    setIsQrCodeVisible(true);
  };

  const handleGooglePlayClick = () => {
    setQrCodeUrl("https://play.google.com/store");
    handleExpandClick();
  };

  const handleAppleStoreClick = () => {
    setQrCodeUrl("https://www.apple.com/app-store/");
    handleExpandClick();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <motion.div
        className={styles.container}
        initial={{ height: "300px" }}
        animate={{ height: isQrCodeVisible ? "auto" : "300px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <IconButton onClick={handleClose} className={styles.iconButton}>
          <CloseIcon />
        </IconButton>

        <Grid container justifyContent={"center"}>
          <Grid size={12} className={styles.titleContainer}>
            <Typography className={styles.title}>
              {t("featureAvailable")}
            </Typography>
          </Grid>
          <Grid size={12} className={styles.subTitleContainer}>
            <Box className={styles.onHoverContainer}>
              <Typography className={styles.subTitle}>{t("downloadHere")}</Typography>
              <Box className={styles.arrow}></Box>
            </Box>
          </Grid>
          <Grid size={5} className={styles.buttonContainer}>
            <DownloadButton
              label={t("getItOn")}
              iconSrc={googlePlay}
              onClick={handleGooglePlayClick}
            />
          </Grid>
          <Grid size={5} className={styles.buttonContainer}>
            <DownloadButton
              label={t("getItOn")}
              iconSrc={appleStore}
              onClick={handleAppleStoreClick}
            />
          </Grid>

          {/* QR Code Section */}
          {isQrCodeVisible && (
            <Grid
              container
              justifyContent="center"
              className={styles.qrCodeContainer}
              style={{ marginTop: "20px", textAlign: "center" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Box className={styles.qrBox}>
                  <QRCode
                    value={qrCodeUrl}
                    size={128}
                    bgColor="#ffffff"
                    fgColor="#000"
                  />
                </Box>
                <Typography className={styles.qrText}>
                  {t("scanQrCode")}
                  <br />
                  {qrCodeUrl.includes("play.google.com") ? t("android") : t("ios")}
                </Typography>
              </motion.div>
            </Grid>
          )}
        </Grid>
      </motion.div>
    </Modal>
  );
};

export default DownloadTheApp;
