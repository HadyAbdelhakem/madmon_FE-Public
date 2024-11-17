"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "../../../styles/pages/reserve.module.scss";
import ContentLayout from "@/components/layout/ContentLayout";
import LoggedInLayout from "@/components/layout/LoggedInLayout";
import ItemPriceDetails from "@/components/constant/ItemPriceDetails";
import Link from "next/link";
import ActiveButton from "@/components/constant/ActiveButton";
import CancelButton from "@/components/constant/CancelButton";

const Reserve = () => {
  return (
    <ContentLayout>
      <LoggedInLayout>
      <Grid container mb={8} sx={{ justifyContent: { xs: "center", md: "flex-start" } }}>
  <Grid
    size={{ xs: 12,sm:12, md: 6, lg: 6 }}
    display={"flex"}
    justifyContent={{ xs: "center", md: "flex-start" }}
  >
    <ItemPriceDetails />
  </Grid>
  <Grid   size={{ xs: 12,sm:12, md: 6, lg: 6 }} sx={{
    mt: { xs: 5, sm: 0 }, // Margin-top is 2 (theme spacing) only for xs; 0 for larger screens
  }}>
    {/* Reservation fees */}
    <Grid container spacing={2}>
      {/* Reservation Fees Title */}
      <Grid
        size={{ xs: 6, md: 6, lg: 6 }}
        sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-start" } }}
      >
        <Box className={styles.reservationFees}>
          <Grid container>
            <Grid size={12}>
              <Typography className={styles.title}>Reservation Fees</Typography>
            </Grid>
            <Grid size={12}>
              <Typography className={styles.subtitle}>
                ( Deducted From The Commission )
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>

      {/* Price Box */}
      <Grid
        size={{ xs: 6, md: 6, lg: 6 }}
        sx={{ display: "flex", justifyContent: { xs: "flex-end", md: "flex-start" } }}
      >
        <Box className={styles.priceBox}>
          <Typography className={styles.price}>
            20.000<span className={styles.currency}>EGP</span>
          </Typography>
        </Box>
      </Grid>

      {/* Contract Link */}
      <Grid
        size={12}
        sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}
      >
        <Box className={styles.linkContainer}>
          <Link href="#" className={styles.linkText}>
            Kindly Read The Online Contract Carefully
          </Link>
          <ArrowForwardIcon className={styles.arrowIcon} />
        </Box>
      </Grid>

      {/* Buttons */}
      <Grid size={12} display={"flex"} justifyContent={"center"} mt={7}>
        <ActiveButton
          text="Activate Your Account"
          width="398px"
          height="40px"
          fontSize="14px"
        />
      </Grid>
      <Grid size={12} display={"flex"} justifyContent={"center"}>
        <CancelButton
          text="Pay Now"
          width="398px"
          height="40px"
          fontSize="14px"
        />
      </Grid>
    </Grid>
  </Grid>
</Grid>

      </LoggedInLayout>
    </ContentLayout>
  );
};

export default Reserve;
