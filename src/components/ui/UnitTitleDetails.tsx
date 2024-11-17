import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "../../styles/components/ui/unitTitleDetails.module.scss";
import Image from "next/image";
import locationIcon from "../../assets/images/features/location.svg";

interface UnitTitleDetailsProps {
  title: string;
  status: string;
  price: string;
  currency: string;
  location: string;
  addedDate: string;
}

const UnitTitleDetails: React.FC<UnitTitleDetailsProps> = ({
  title,
  status,
  price,
  currency,
  location,
  addedDate,
}) => {
  return (
    <Box className={styles.mainContainer}>
      <Box className={styles.cardContainer}>
        <Grid
          container
          className={styles.contentRow}
          alignItems="center"
          justifyContent="space-between"
          sx={{ height: "57px", padding: "0 16px" }}
        >
          <Grid size={4}>
            <Typography className={styles.title} align="left">
              {title}
            </Typography>
          </Grid>
          <Grid size={2} className={styles.statusTextCol}>
            <Typography className={styles.statusText}>
              {status}
            </Typography>
          </Grid>
          <Grid size={5} sx={{ textAlign: "right" }} className={styles.priceTexColt}>
            <Typography className={styles.priceText}>
              {price} <span className={styles.priceCurrency}>{currency}</span>
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={styles.locationContainer}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid size={8} className={styles.locationDetails} sx={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src={locationIcon}
              alt="Location Icon"
              width={13}
              height={13}
              className={styles.locationIcon}
            />
            <Typography className={styles.locationText} sx={{ marginLeft: "6px" }}>
              {location}
            </Typography>
          </Grid>
          <Grid size={4} className={styles.addedDate} sx={{ textAlign: "right", display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Typography className={styles.addedText}>
              Added
            </Typography>
            <Typography className={styles.addedDateText}>
              {addedDate}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default UnitTitleDetails;
