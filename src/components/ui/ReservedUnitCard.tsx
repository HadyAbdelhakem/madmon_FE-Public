import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  // IconButton,
  Typography,
  Box,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
// import DeleteIcon from "../../assets/images/delete.png";
import Grid from "@mui/material/Grid2";
import Icon1 from "../../assets/images/vector.svg";
import Icon2 from "../../assets/images/vector(1).svg";
import Icon3 from "../../assets/images/vector(2).svg";

import CancelButton from "../constant/CancelButton";
import { getStatusLabel } from "@/utils/statusUtils"; // Import the utility function

import { useRouter } from "next/navigation";


interface UnitCardProps {
  unitReference: string;
  imageUrl: string | StaticImageData;
  title: string;
  description: string;
  price: number;
  status: number;
  tag?: string;
  assignedBroker?: string;
  rooms: number;
  bathrooms: number;
  space: number;
  addedDate: string;
  onDelete?: () => void;
}

const UnitCard: React.FC<UnitCardProps> = ({
  unitReference,
  imageUrl,
  title,
  description,
  price,
  status,
  rooms,
  bathrooms,
  space,
 
}) => {
  const { label: statusLabel, color: statusColor } = getStatusLabel(status);
  const router = useRouter(); // Initialize the router

 // Redirect to /my-units when the card is clicked
 const handleCardClick = () => {
router.push(`/profile/my-units/${unitReference}`);
};


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
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: 2,
          height: "235px",
          width: "923px",
          borderRadius: 5,
          position: "relative",
          backgroundColor: "#F2F3F4",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
        }}
        onClick={handleCardClick} // Attach the redirect function to the card click

      >
    
          <CardMedia
            component="div"
            sx={{ width: "228px", height: "235px", position: "relative" }}
          >
            <Image
              src={typeof imageUrl === "string" ? imageUrl : imageUrl.src}
              alt="Unit Image"
              layout="fill"
              objectFit="contain"
            />
          </CardMedia>
   

        <CardContent sx={{ flexGrow: 1, height: "235px" }}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            spacing={1}
            sx={{ maxWidth: "570px" }}
          >
            <Grid size={6}>
              <Typography
                component="div"
                sx={{ fontSize: "22px", fontWeight: 600 }}
              >
                {title}
              </Typography>
            </Grid>
            <Grid size={2}>
              <Box
                sx={{
                  backgroundColor: statusColor,
                  color: "white",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  width: "70px",
                  height: "22px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {statusLabel}
              </Box>
            </Grid>
            <Grid size={2}>
              <Typography
                component="div"
                sx={{
                  color: "#F20000",
                  fontSize: "28px",
                  fontWeight: 600,
                  width: "180px",
                }}
              >
                {price.toLocaleString()}
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
            <Grid size={4}>
              <Typography sx={{ fontSize: "16px", color: "#494949" }}>
                {description}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            spacing={1}
            sx={{ maxWidth: "350px" }}
            mt={2}
          >
            <Grid size={4}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <Image src={Icon1} alt="Icon" unoptimized />
                <Typography sx={{ fontSize: "12px" }} ml={1}>
                  {rooms} Rooms
                </Typography>
              </Box>
            </Grid>
            <Grid size={5}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <Image src={Icon2} alt="Icon" unoptimized />
                <Typography sx={{ fontSize: "12px" }} ml={1}>
                  {bathrooms} Bathrooms
                </Typography>
              </Box>
            </Grid>
            <Grid size={3}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <Image src={Icon3} alt="Icon" unoptimized />
                <Typography sx={{ fontSize: "12px" }} ml={1}>
                  {space} m²
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            spacing={1}
            sx={{ maxWidth: "570px" }}
          >
            <Grid size={8}>
            <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                  }}
                  mt={3}
                >
                  <CancelButton
                    text="Assign a Broker"
                    width="295px"
                    height="42px"
                    fontSize="16px"
                  />{" "}
                </Box>
            </Grid>

            
          </Grid>
        </CardContent>

      </Card>
     

    </Box>
  );
};

export default UnitCard;
