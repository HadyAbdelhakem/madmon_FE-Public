import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { useLocale } from "next-intl";
import styles from "../../styles/components/ui/UnitsCarousel.module.scss";
import MiniUnit from './MiniUnit';
import { StaticImageData } from 'next/image';

interface Unit {
  id?: number;
  title: string;
  price: number;
  image: string | StaticImageData; // Allow both string and StaticImageData
  location: string;
  area: number;
  beds: number;
  baths: number;
  // Add other properties as needed
}

interface UnitsCarouselProps {
  units: Unit[];
}

// Responsive breakpoints
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const UnitsCarousel: React.FC<UnitsCarouselProps> = ({ units }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <Box
      sx={{
        mx: 'auto',
        p: 2,
        maxWidth: isMobile ? '500px' : '1100px',
      }}
    >
      <Carousel
        swipeable
        draggable
        responsive={responsive}
        ssr={true}
        infinite
        autoPlay={false}
        autoPlaySpeed={3000}
        keyBoardControl
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "desktop"]}
        dotListClass="custom-dot-list-style"
        itemClass={styles.carouselItem}
        rtl={isRTL}
      >
        {units.map((unit) => (
          <MiniUnit key={unit.id} unit={unit} />
        ))}
      </Carousel>
    </Box>
  );
};

export default UnitsCarousel;
