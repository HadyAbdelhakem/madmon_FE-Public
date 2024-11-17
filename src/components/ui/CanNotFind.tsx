import React from "react";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import questionImage from "../../assets/images/question-mark-image.svg";
import Image from "next/image";
import MainButton from "../constant/MainButton";
import styles from "../../styles/components/ui/canNotFind.module.scss"

const CanNotFind = () => {
  return (
    <Container >
      <Grid container className={styles.container}>
        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <Grid container className={styles.rightCol} >
            <Grid size={12} >
              <Typography className={styles.title}>Can’t Find what you’re looking for?</Typography>
            </Grid>
            <Grid size={12}  className={styles.subTitleContainer} >
              <Typography className={styles.subTitle}>
                Send us a Request with your requirements and we’ll Notify you
                when it’s available{" "}
              </Typography>
            </Grid>
            <Grid size={12}>
              <MainButton
                text="Send Request"
                width="296px"
                height="40px"
                fontSize="16px"
                sx={{ borderRadius: "10px" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 6 }} className={styles.imageContainer}  sx={{
    justifyContent: { xs: 'center', md: 'flex-end' },
    display: 'flex',
  }}>
          <Image alt="Question Image" src={questionImage} className={styles.questionImage} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CanNotFind;
