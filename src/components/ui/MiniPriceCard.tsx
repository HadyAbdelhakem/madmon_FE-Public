// MiniPriceCard.js
import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "../../styles/components/ui/miniPriceCard.module.scss";

interface MiniPriceCardProps {
  header: string;
  value?: number |null | undefined |string;
  unit:string
}

const MiniPriceCard: React.FC<MiniPriceCardProps> = ({ header, value,unit }) => {
  return (
    <Box className={styles.mainContainer}>
      <Grid container alignItems="center" sx={{ height: "100%" }} justifyContent="center" py={1} spacing={2}>
        <Grid size={12} className={styles.headerContainer}>
          <Typography className={styles.headerText}>{header}</Typography>
        </Grid>
        <Grid size={12}>
          <Typography className={styles.priceText}>
            {value} 
            <span className={styles.currencyText}>{unit}</span>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MiniPriceCard;
