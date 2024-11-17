// PropertyTypeFilter.tsx
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ApartmentIcon from "../../assets/images/filter-icons/Apartment.svg";
import VillaIcon from "../../assets/images/filter-icons/villa.svg";
import TwinHouseIcon from "../../assets/images/filter-icons/twin house.svg";
import TownHouseIcon from "../../assets/images/filter-icons/town house.svg";
import DuplexIcon from "../../assets/images/filter-icons/duplex.svg";
import PentHouseIcon from "../../assets/images/filter-icons/pent house.svg";
import ChaletIcon from "../../assets/images/filter-icons/challet.svg";
import StudioIcon from "../../assets/images/filter-icons/studio.svg";
import CabinIcon from "../../assets/images/filter-icons/cabin.svg";
import ClinicIcon from "../../assets/images/filter-icons/clinic.svg";
import OfficeIcon from "../../assets/images/filter-icons/office.svg";
import RetailIcon from "../../assets/images/filter-icons/retail.svg";
import IconButtonFilter from "../constant/IconButtonFilter";
import styles from "../../styles/components/ui/propertyTypeFilter.module.scss";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface PropertyTypeFilterProps {
  onPropertyTypeChange: (propertyType: string) => void;
  selectedCategory: string; // "residential" or "commercial"
}


const residentialTypes = [
  { icon: ApartmentIcon, text: "Apartment", value: "Apartment" },
  { icon: VillaIcon, text: "Villa", value: "Villa" },
  { icon: TwinHouseIcon, text: "Twin House", value: "Twinhouse" },
  { icon: TownHouseIcon, text: "Town House", value: "Townhouse" },
  { icon: DuplexIcon, text: "Duplex", value: "Duplex" },
  { icon: PentHouseIcon, text: "Pent House", value: "penthouse" },
  { icon: ChaletIcon, text: "Chalet", value: "Chalet" },
  { icon: StudioIcon, text: "Studio", value: "Studio" },
  { icon: CabinIcon, text: "Cabin", value: "Cabin" },
  
];

const commercialTypes = [
  { icon: OfficeIcon, text: "Office", value: "Office" },
  { icon: ClinicIcon, text: "Clinic", value: "Clinic" },
  { icon: RetailIcon, text: "Retail", value: "Retail" },
];

const PropertyTypeFilter: React.FC<PropertyTypeFilterProps> = ({ onPropertyTypeChange, selectedCategory }) => {
  const [selectedButton, setSelectedButton] = useState<string>("");

  const handlePropertyTypeClick = (propertyType: string) => {
    setSelectedButton(propertyType);
    onPropertyTypeChange(propertyType); // Call the callback with the selected type
  };

  // Determine which types to show based on the selected category
  const propertyTypes = selectedCategory === "residential" ? residentialTypes : commercialTypes;

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
    <Box sx={{ width: "100%", height: "150px" }} className={styles.carouselContainer}>
      <Carousel
        responsive={{
          superLargeDesktop: { breakpoint: { max: 4030, min: 1024 }, items: 4 },
          desktop: { breakpoint: { max: 1024, min: 768 }, items: 4 },
          tablet: { breakpoint: { max: 768, min: 464 }, items: 3 },
          mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
        }}
        infinite={true}
        autoPlay={false}
        showDots={false}
        containerClass={styles.carouselContainer}
        itemClass={styles.carouselItem}
        partialVisible={true}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {propertyTypes.map((property) => (
          <Box key={property.value}>
            <IconButtonFilter
              icon={property.icon}
              text={property.text}
              selected={selectedButton === property.value}
              onClick={() => handlePropertyTypeClick(property.value)}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default PropertyTypeFilter;
