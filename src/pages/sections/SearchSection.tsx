"use client";
import React from "react";
import Grid from "@mui/material/Grid2";
import ContentLayout from "@/components/layout/ContentLayout";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslations, useLocale } from "next-intl"; // Import useTranslations and useLocale
import styles from "../../styles/pages/sections/searchSection.module.scss";
import searchIcon from "../../assets/images/search-icon.svg";
import Image from "next/image";
import MainButton from "@/components/constant/MainButton";
import UnitsCarousel from "@/components/ui/UnitsCarousel";
import unitImage from "../../assets/images/unitImage.png";
import MobileSearchSection from "./MobileSearchSection";

const SearchSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const t = useTranslations("SearchSection"); // Use translations from SearchSection
  const locale = useLocale(); // Get the current language
  const isRTL = locale === "ar"; // Check if the current language is Arabic (RTL)

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
  
  
  if (isMobile) {
    return <MobileSearchSection />;
  }

  return (
    <Box>
      <ContentLayout>
        <Box className={styles.counterCard}>
          <Grid
            container
            className={styles.containerVerticalCenter}
            style={{
              marginRight: isRTL ? "20px" : "0", // Margin adjustments for RTL
            }} // Adjust text alignment
          >
            <Grid size={4}>
              <Grid container>
                {" "}
                {/* Adjust direction based on language */}
                <Grid size={2}>
                  <Image
                    alt="Search Icon"
                    src={searchIcon}
                    width={36}
                    height={36}
                  />
                </Grid>
                <Grid
                  size={10}
                  className={styles.centerVertical}
                  style={{ textAlign: isRTL ? "right" : "left" }} // Adjust text alignment
                >
                  <Typography className={styles.title}>{t("title")}</Typography>
                </Grid>
                <Grid size={12} className={styles.buttonContainer}>
                  <MainButton
                    text={t("showAllButton")}
                    width="400px"
                    height="42px"
                    fontSize="16px"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid size={8}>
              <UnitsCarousel units={units} />
            </Grid>
          </Grid>
        </Box>
      </ContentLayout>
    </Box>
  );
};

export default SearchSection;
