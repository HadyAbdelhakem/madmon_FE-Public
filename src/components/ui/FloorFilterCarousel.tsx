import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NumberButtonFilter from "../constant/NumberButtonFilter"; // Import the NumberButtonFilter component
import { Box, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from "../../styles/components/ui/propertyTypeFilter.module.scss";

interface FloorFilterCarouselProps {
  onFloorSelect: (floor: number | string) => void;
}

const FloorFilterCarousel: React.FC<FloorFilterCarouselProps> = ({ onFloorSelect }) => {
  const [selectedFloor, setSelectedFloor] = useState<number | string>(1);

  // Array of numbers for floor options
  const floorOptions = Array.from({ length: 10 }, (_, i) => i + 1);
  const handleFloorSelect = (num: number | string) => {
    setSelectedFloor(num);
    onFloorSelect(num); // Call the callback with the selected floor
  };


  // Responsive settings for the carousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  // Custom Left Arrow
  const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => (
    <Box className={styles.carouselArrow} onClick={onClick}>
      <IconButton
        sx={{
          position: "absolute",
          left: 10,
          top: "45%",
          transform: "translateY(-50%)",
          zIndex: 1,
          backgroundColor: "rgba(240, 240, 240, 0.8)", // Light gray background with 70% opacity
          color: "#0512F5", // Blue color
          width: "30px",
          height: "30px",
          "&:hover": {
            backgroundColor: "#e0e0e0", // Darker gray on hover
          },
        }}
      >
        <ArrowBackIosIcon fontSize="small" />
      </IconButton>
    </Box>
  );

  // Custom Right Arrow
  const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => (
    <Box className={styles.carouselArrow} onClick={onClick}>
      <IconButton
        sx={{
          position: "absolute",
          right: 10,
          top: "45%",
          transform: "translateY(-50%)",
          zIndex: 1,
          backgroundColor: "rgba(240, 240, 240, 0.8)", // Light gray background with 70% opacity
          color: "#0512F5", // Blue color
          width: "30px",
          height: "30px",
          "&:hover": {
            backgroundColor: "#e0e0e0", // Darker gray on hover
          },
        }}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>
    </Box>
  );

  return (
    <Box sx={{ width: "100%", height: "60px" }} className={styles.carouselContainer}>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        showDots={false}
        containerClass={styles.carouselContainer}
        itemClass={styles.carouselItem}
        partialVisible={true}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {floorOptions.map((num) => (
          <NumberButtonFilter
            key={num}
            number={num}
            selected={selectedFloor === num}
            onClick={() => handleFloorSelect(num)}
          />
        ))}
        <NumberButtonFilter
          number="+10"
          selected={selectedFloor === "+10"}
          onClick={() => handleFloorSelect("+10")}
        />
      </Carousel>
    </Box>
  );
};

export default FloorFilterCarousel;