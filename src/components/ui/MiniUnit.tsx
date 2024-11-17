import Grid from "@mui/material/Grid2";
import styles from "../../styles/components/ui/miniUnit.module.scss";
import favoriteIcon from "../../assets/images/favorite-icon.svg";
import fillFavoriteIcon from "../../assets/images/fill-favorite-icon.svg";
import distanceIcon from "../../assets/images/distance-icon.svg";
import bedIcon from "../../assets/images/bed-icon.svg";
import bathroomIcon from "../../assets/images/bathroom-icon.svg";

import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { useLocale } from "next-intl"; // Import useLocale to detect the language
interface Unit {
  image: string | StaticImageData; // Adjusted to allow both types
  price: number;
  title: string;
  location: string;
  area: number;
  beds: number;
  baths: number;
}

interface UnitProps {
  unit: Unit;
}

const MiniUnit: React.FC<UnitProps> = ({ unit }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const locale = useLocale(); // Get the current language
  const isRTL = locale === "ar"; // Check if the language is Arabic (RTL)

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  // Define static features here
  const features = [
    { icon: distanceIcon, value: unit.area, label: "Area" },
    { icon: bedIcon, value: unit.beds, label: "Beds" },
    { icon: bathroomIcon, value: unit.baths, label: "Baths" },
  ];

  return (
    <Box
      className={styles.cardContainer}
      sx={{
        direction: isRTL ? "rtl" : "ltr", // Set text direction dynamically
      }}
    >
      <Grid container>
        <Box className={styles.imageContainer}>
          <Image
            className={styles.unitImage}
            alt="unitImage"
            src={unit.image}
          />
          <Box className={styles.overlay} />

          <Image
            className={styles.favoriteIcon}
            alt="Favorite"
            src={isFavorited ? fillFavoriteIcon : favoriteIcon}
            onClick={toggleFavorite}
          />
        </Box>
        <Typography
          className={styles.typography}
          sx={{
            direction:'ltr',

          
         
           
          }}
        >
          {unit.price}
          <span className={styles.currency}>EGP</span>
        </Typography>

        <Grid size={12}>
          <Typography className={styles.unitTitle}>{unit.title}</Typography>
        </Grid>
        <Grid size={12}>
          <Typography className={styles.unitSubTitle}>
            {unit.location}
          </Typography>
        </Grid>
        <Grid size={12}>
          <Grid container spacing={2}>
            {features.map((feature, index) => (
              <Grid key={index} className={styles.inlineContainer}>
                <Typography className={styles.iconText}>
                  {feature.value}
                </Typography>
                <Image
                  alt={feature.label}
                  src={feature.icon}
               
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MiniUnit;
