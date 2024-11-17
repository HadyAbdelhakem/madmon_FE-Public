// SocialLoginButtons.js
import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "../../styles/components/ui/viewLocationCard.module.scss";
import wallet from "../../assets/images/wallet.svg";
import Image from "next/image";

const DownPaymentPaidCard = () => {
  return (
    <Box className={styles.mainContainer}>
    <Grid container alignItems="center"   sx={{height:"100%"}} spacing={2} px={2}> {/* Vertically centers the content */}
      <Grid >
        <Image src={wallet} alt={"Wallet"} />
      </Grid>
      <Grid >
        <Typography className={styles.text}>Down Payment Paid</Typography>
      </Grid>
    </Grid>
  </Box>
  
  );
};

export default DownPaymentPaidCard;
