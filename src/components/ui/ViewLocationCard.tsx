// SocialLoginButtons.js
import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "../../styles/components/ui/viewLocationCard.module.scss";
import locationICon from "../../assets/images/features/location.svg";
import Image from "next/image";

const ViewLocationCard = () => {
  return (
    <Box className={styles.mainContainer}>
    <Grid container alignItems="center"   sx={{height:"100%"}} spacing={2} px={3}> {/* Vertically centers the content */}
      <Grid >
        <Image src={locationICon} alt={"Location Icon"} width={16} height={19} />
      </Grid>
      <Grid >
        <Typography className={styles.text}>View Location on Map</Typography>
      </Grid>
    </Grid>
  </Box>
  
  );
};

export default ViewLocationCard;
