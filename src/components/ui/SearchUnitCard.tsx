"use client";
import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import Image, { StaticImageData } from "next/image"; // Import Next.js Image component
import { useRouter } from "next/navigation"; // Import useRouter hook
import Grid from "@mui/material/Grid2";
import styles from "../../styles/components/ui/searchUnitCard.module.scss";
import locationIcon from "../../assets/images/blue-location-icon.svg";
import MainButton from "../constant/MainButton";
import CustomButton from "../constant/CustomButton";
import FavoriteButton from "../constant/FavoriteButton";
import unitTypeIcons from "@/utils/iconsMapping";

interface SearchUnitCardProps {
  id: number;
  unit_reference: string;
  imageUrl: string | StaticImageData;
  title: string;
  description: string;
  state: string;
  tag?: string;
  assignedBroker?: string;
  price: string;
  location: string;
  unitType: string;
  features: {
    icon: StaticImageData;
    value: string;
    label: string;
  }[];
  isReserved?: boolean;
}

const SearchUnitCard: React.FC<SearchUnitCardProps> = ({
  id,
  unit_reference,
  imageUrl,
  title,
  price,
  location,
  unitType,
  features,
  isReserved = false,
}) => {
  const router = useRouter();

  const handleReserveButton = (e: React.MouseEvent) => {
    e.stopPropagation(); // Stop event from bubbling up
    router.push("/reserve");
  };
  const handleRequestCall = (e: React.MouseEvent) => {
    e.stopPropagation(); // Stop event from bubbling up

    router.push(`/request-call/${id}`);
  };
   // Redirect to /my-units when the card is clicked
 const handleCardClick = () => {
  router.push(`/search/unit/${ unit_reference}`);
  };
  const unitTypeIcon = unitTypeIcons[unitType]; // Default to ApartmentIcon if no match

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: 1,
        position: "relative",
      }}
    >
      <Card
        className={styles.mainUnitCard}
        sx={{
          boxShadow: "none",
          border: "2px solid #F2F3F4",
        }}
        onClick={handleCardClick} // Attach the redirect function to the card click

      >
        <Box sx={{ position: "relative" }}>
          {isReserved && (
            <Box className={styles.reservedBox}>Reserved For 2 Days</Box>
          )}
          <CardMedia component="div" className={styles.unitMediaCard}>
            <Image
              src={typeof imageUrl === "string" ? imageUrl : imageUrl.src}
              alt="Unit Image"
              layout="fill"
              objectFit="cover"
            />
          </CardMedia>
        </Box>

        <CardContent sx={{ flexGrow: 1, height: "253px" }}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            spacing={1}
            sx={{ maxWidth: "483px" }}
          >
            <Grid size={7}>
              <Typography component="div" className={styles.title}>
                {title}
              </Typography>
            </Grid>

            <Grid size={3}>
              <Typography component="div" className={styles.unitPrice}>
                {price}
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#F20000",
                    marginLeft: "8px",
                  }}
                >
                  EGP
                </span>
              </Typography>
            </Grid>

            <Grid size={12} className={styles.inlineContainer}>
              <Image alt="location icon" src={locationIcon} />
              <Typography className={styles.locationText}>
                {location}
              </Typography>
            </Grid>

            <Grid size={12} className={styles.inlineContainer}>
              <Image
              width={21}
              height={21}
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(27%) sepia(100%) saturate(7487%) hue-rotate(245deg) brightness(100%) contrast(130%)",
                }}
                alt="unit type icon"
                src={unitTypeIcon}
              />{" "}
              {/* Dynamic Icon */}
              <Typography className={styles.locationText} ml={1}>
                {unitType}
              </Typography>
            </Grid>

            <Grid size={12}>
              <Grid container spacing={3}>
                {features.map((feature, index) => (
                  <Grid key={index} className={styles.inlineContainer}>
                    <Image
                      alt={feature.label}
                      src={feature.icon}
                      className={styles.iconImage}
                    />
                    <Typography className={styles.iconText}>
                      {feature.value}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid size={12}>
              <Grid container spacing={3} className={styles.buttonsContainer}>
                <Grid size={5}>
                  <MainButton
                    text="Reserve Unit"
                    width="190px"
                    height="42px"
                    fontSize="16px"
                    onClick={handleReserveButton}
                    sx={{ color: "#F2DB00", borderRadius: "10px" }}
                  />
                </Grid>
                <Grid size={5}>
                  <CustomButton
                    text="Request a Call"
                    width="190px"
                    height="42px"
                    fontSize="16px"
                    sx={{ borderRadius: "10px" }}
                    onClick={handleRequestCall} // Attach the onClick handler
                  />
                </Grid>
                <Grid size={2}> 
                  <FavoriteButton
                    backgroundColor="transparent"
                    borderColor="#0000FF"
                    iconColor="#0000FF"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SearchUnitCard;
