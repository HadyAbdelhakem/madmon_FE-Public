import React, { useState } from "react";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import styles from "../../styles/components/constant/carouselImages.module.scss";

interface CarouselImagesProps {
  images: string[]; // Array of image URLs
}

const CarouselImages: React.FC<CarouselImagesProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  if (!images || images.length === 0) {
    return <div>No images available</div>; // Render a fallback if no images are passed
  }

  return (
    <Grid container width="100%" sx={{ maxWidth: isSmallScreen ? 360 : isMediumScreen ? 540 : 715 }}>
      {/* Grid for Thumbnail Buttons */}
      <Grid
        size={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 1,
        }}
      >
        {images.map((image, index) => (
          <IconButton
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              margin: "5px",
              padding: 0,
              border: currentIndex === index ? "2px solid blue" : "none",
              borderRadius: "8px",
            }}
          >
            {/* Thumbnail Image */}
            <Image
              className={styles.thumbnailImage}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={isSmallScreen ? 40 : isMediumScreen ? 50 : 50}
              height={isSmallScreen ? 40 : isMediumScreen ? 50 : 50}
            />
          </IconButton>
        ))}
      </Grid>

      {/* Grid for Main Image Display */}
      <Grid size="grow">
        <Box
          sx={{
            width: "100%",
            height: isSmallScreen ? 400 : isMediumScreen ? 600 : 800,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <AnimatePresence>
            {/* Motion Div for Image Transition */}
            <motion.div
              key={currentIndex}
              initial={{ y: 750, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -750, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%", // Ensure the div takes full height for the image
              }}
            >
              <Image
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                width={isSmallScreen ? 330 : isMediumScreen ? 540 : 715}
                height={isSmallScreen ? 370 : isMediumScreen ? 600 : 800}
                style={{ borderRadius: "8px" }}
                className={styles.displayedImage}
              />
            </motion.div>
          </AnimatePresence>
        </Box>
      </Grid>
    </Grid> 
  );
};

export default CarouselImages;
