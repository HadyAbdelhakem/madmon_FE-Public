"use client";
import React from "react";
import Grid from "@mui/material/Grid2";
import ContentLayout from "@/components/layout/ContentLayout";
import { Box, Typography } from "@mui/material";
import styles from "../../styles/pages/sections/searchSection.module.scss";
import searchIcon from "../../assets/images/search-icon.svg";
import Image from "next/image";
import MainButton from "@/components/constant/MainButton";
import UnitsCarousel from "@/components/ui/UnitsCarousel";
import unitImage from "../../assets/images/unitImage.png";


const MobileSearchSection = () => {
  const units = [
    {
      id: 1,
      image: unitImage,
      favoriteIcon: '/icons/heart.svg',
      fillFavoriteIcon: '/icons/heart-filled.svg',
      price: 3000000,  // Change to number
      title: 'Luxury Apartment',
      location: 'New Cairo',
      area: 170, // Change to number
      beds: 3, // Change to number
      baths: 2 // Change to number
    },
    {
      id: 2,
      image: unitImage,
      favoriteIcon: '/icons/heart.svg',
      fillFavoriteIcon: '/icons/heart-filled.svg',
      price: 3000000,
      title: 'Luxury Apartment',
      location: 'New Cairo',
      area: 170,
      beds: 3,
      baths: 2
    },
    {
      id: 3,
      image: unitImage,
      favoriteIcon: '/icons/heart.svg',
      fillFavoriteIcon: '/icons/heart-filled.svg',
      price: 3000000,
      title: 'Luxury Apartment',
      location: 'New Cairo',
      area: 170,
      beds: 3,
      baths: 2
    },
    {
      id: 4,
      image: unitImage,
      favoriteIcon: '/icons/heart.svg',
      fillFavoriteIcon: '/icons/heart-filled.svg',
      price: 3000000,
      title: 'Luxury Apartment',
      location: 'New Cairo',
      area: 170,
      beds: 3,
      baths: 2
    },
    {
      id: 5,
      image: unitImage,
      favoriteIcon: '/icons/heart.svg',
      fillFavoriteIcon: '/icons/heart-filled.svg',
      price: 3000000,
      title: 'Luxury Apartment',
      location: 'New Cairo',
      area: 170,
      beds: 3,
      baths: 2
    },
  ];
  return (
    <ContentLayout>
      <Box className={styles.mobileSearchCard}>
        <Grid container> 
        <Grid size={1}>
                <Image
                  alt="Search Icon"
                  src={searchIcon}
                  width={25}
                  height={25}
                />
              </Grid>
              <Grid size={11} className={styles.centerVertical}>
                {" "}
                <Typography className={styles.mobileTitle}>
                  Complete your Last Search and Find Your Perfect Home
                </Typography>
              </Grid>
              <Grid size={12} >
              <UnitsCarousel units={units} />
              </Grid>
              <Grid size={12} className={styles.MobileButtonContainer}>
                <MainButton
                  text="Show All"
                  width="327px"
                  height="42px"
                  fontSize="14px"
                />{" "}
              </Grid>
        </Grid>

        {/* <Grid container className={styles.containerVerticalCenter} >
          <Grid size={4}>
            <Grid container>
              <Grid size={2}>
                <Image
                  alt="Search Icon"
                  src={searchIcon}
                  width={36}
                  height={36}
                />
              </Grid>
              <Grid size={10} className={styles.centerVertical}>
                {" "}
                <Typography className={styles.title}>
                  Complete your Last Search and Find Your Perfect Home
                </Typography>
              </Grid>
              <Grid size={12} className={styles.buttonContainer}>
                <MainButton
                  text="Show All"
                  width="400px"
                  height="52px"
                  fontSize="18px"
                />{" "}
              </Grid>
            </Grid>
          </Grid>
          <Grid size={8} >
          <UnitsCarousel units={units} />
          </Grid>
        </Grid> */}
      </Box>
    </ContentLayout>
  );
};

export default MobileSearchSection;
