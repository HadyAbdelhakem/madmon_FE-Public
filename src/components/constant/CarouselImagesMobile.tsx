import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../../styles/components/constant/carouselImages.module.scss";

interface CarouselImagesMobileProps {
  images: string[]; // Array of image URLs
}

const responsive = {
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 1,
  },
};

const CarouselImagesMobile: React.FC<CarouselImagesMobileProps> = ({
  images,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div>No images available</div>; // Render a fallback if no images are passed
  }

  return (
    <Box width="100%" sx={{ mx: "auto" }}>
      {/* Main Image Display */}
      <Box
        sx={{
          width: "80vw",
          height: "40vh", // Set the desired fixed height and width for the container
          overflow: "hidden",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // Center content vertically
          margin: "auto", // Center container in the viewport
          marginBottom: 2,
        }}
      >
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              fill
              style={{
                objectFit: "contain", // Ensures the entire image fits within the container without cropping
                borderRadius: "8px",
              }}
            />
          </motion.div>
        </AnimatePresence>
      </Box>

      {/* Carousel for Thumbnails */}
      <Box sx={{ width: "100%" }} ml={2} mb={4}>
        <Carousel
          responsive={responsive}
          containerClass="carousel-container"
          itemClass="carousel-item"
          showDots={false}
          infinite={false}
          arrows={true}
          renderButtonGroupOutside={true}
          customTransition="all .5s"
        >
          {images.map((image, index) => (
            <IconButton
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                padding: 0,
                border: currentIndex === index ? "2px solid blue" : "none",
                borderRadius: "8px",
                marginRight: 1,
              }}
            >
              <Image
                className={styles.thumbnailImage}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                width={70}
                height={70}
              />
            </IconButton>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default CarouselImagesMobile;
