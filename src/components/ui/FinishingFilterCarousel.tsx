import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FilterTextButton from "../constant/FilterTextButton";
import styles from "../../styles/components/ui/propertyTypeFilter.module.scss";

interface FinishingFilterCarouselProps {
  onFinishingSelect: (finishing: string) => void;
}

const finishingOptions = [
  { text: "Not Finished", value: "NotFinished" },
  { text: "Semi Finished", value: "SemiFinished" },
  { text: "Finished", value: "Finished" },
  { text: "Furnished", value: "Furnished" },
];

const FinishingFilterCarousel: React.FC<FinishingFilterCarouselProps> = ({ onFinishingSelect }) => {
  const [selectedFinishing, setSelectedFinishing] = useState<string>("");

  const handleFinishingSelect = (value: string) => {
    setSelectedFinishing(value);
    onFinishingSelect(value); // Pass the selected finishing value to the parent component
  };


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
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
        {finishingOptions.map((option) => (
          <Box key={option.value} sx={{ display: "flex", justifyContent: "center" }}>
            <FilterTextButton
              text={option.text}
              sx={{width:"190px",hight:"35px" ,marginRight:2}}
              selected={selectedFinishing === option.value}
              onClick={() => handleFinishingSelect(option.value)}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default FinishingFilterCarousel;
