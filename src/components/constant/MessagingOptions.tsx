import React from "react";
import { Card, CardActionArea, Typography } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import styles from "../../styles/components/constant/MessagingOptions.module.scss";

interface MessagingOptionsProps {
  label: string;
  iconSrc: string;
  text: string;

}

const MessagingOptions: React.FC<MessagingOptionsProps> = ({
  label,
  iconSrc,
  text,

}) => {
  return (
    <Grid container justifyContent={"center"}>
      <Card
        variant="outlined"
        sx={{
          borderColor: "#DCDCFF" , // Consistent light purple border color when selected
          borderWidth: 1, // Thicker border when selected
          m: 1,
          width: "399px",
          height: "238px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "16px",
          boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.08)",
          transition: "border-color 300ms, border-width 300ms", // Smooth transition for border color and width
          outline: "none",
          "&:focus-visible": {
            outline: "none",
          },
        }}
      >
        <CardActionArea
          disableRipple
       
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
            textAlign="center"
          >
            <Grid >
              <Image src={iconSrc} alt={label} className={styles.imageIcon} />
            </Grid>
            <Grid >
              <Typography className={styles.optionTitle}>{text}</Typography>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default MessagingOptions;
