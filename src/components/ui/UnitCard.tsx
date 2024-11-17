import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
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
import Icon4 from "../../assets/images/brokerIcon.svg";

import CancelButton from "../constant/CancelButton";
import CustomButton from "../constant/CustomButton";
import { getStatusLabel } from "@/utils/statusUtils"; // Import the utility function
import { formatDate } from "@/utils/dateUtils";
import DownloadTheApp from "./DownloadTheApp";
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
  tag,
  assignedBroker,
  rooms,
  bathrooms,
  space,
  addedDate,
  onDelete,
}) => {
  const { label: statusLabel, color: statusColor } = getStatusLabel(status);
  const router = useRouter(); // Initialize the router

 // Redirect to /my-units when the card is clicked
 const handleCardClick = () => {
router.push(`/profile/my-units/${unitReference}`);
};
  const showPendingLayout = statusLabel === "Pending";  

  // State for controlling the modal
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = (e: React.MouseEvent) => {
    e.stopPropagation(); // Stop event from bubbling up
    setModalOpen(true);
  };  const handleCloseModal = () => setModalOpen(false);

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
        {tag === "Reserved" && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: "#0512F5",
              color: "white",
              padding: "4px 8px",
              borderRadius: "0 0 15px 10px",
              transform: "translate(-10px, 0px)",
              width: 100,
              textAlign: "center",
              fontSize: 12,
              zIndex: 1000,
            }}
          >
            Reserved
          </Box>
        )}
      
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
              {!assignedBroker && statusLabel !== "Rejected" && (
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
                    onClick={handleOpenModal} // Open modal on click
                  />{" "}
                </Box>
              )}
              {assignedBroker && statusLabel !== "Rejected" && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                  }}
                >
                  {statusLabel === "Pending" ? (
                    <CustomButton
                      text="Edit"
                      width="295px"
                      height="42px"
                      fontSize="16px"
                      sx={{ backgroundColor: "#FFFFFF", marginTop: 3 }}
                    />
                  ) : (
                    <>
                      <Image
                        src={Icon4}
                        alt="Icon"
                        width={24}
                        height={24}
                        unoptimized
                      />
                      <Typography sx={{ fontSize: "14px" }} ml={1}>
                        {assignedBroker}
                      </Typography>
                    </>
                  )}
                </Box>
              )}
            </Grid>

            <Grid size={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  width: "auto",
                  marginLeft: showPendingLayout ? "auto" : 0,
                  marginTop: showPendingLayout ? 0 : 2,
                }}
              >
                <Typography
                  sx={{
                    alignSelf: "flex-end",
                    fontSize: "16px",
                    color: "#494949",
                    fontWeight: 500,
                  }}
                >
                  Added
                </Typography>
                <Typography
                  sx={{ fontSize: "16px", color: "#494949", fontWeight: 500 }}
                >
                  {formatDate(addedDate)}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions
          onClick={onDelete}
          sx={{
            width: "75px",
            height: "100%",
            backgroundColor: "#f27a7b",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          {/* <IconButton
            onClick={onDelete}
            aria-label="delete"
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
                boxShadow: "none",
              },
              padding: 0,
            }}
          >
            <Image
              src={DeleteIcon}
              alt="Delete"
              width={24}
              height={24}
              unoptimized
            />
          </IconButton> */}
        </CardActions>
      </Card>
     

      {/* DownloadTheApp Modal */}
      <DownloadTheApp open={modalOpen} handleClose={handleCloseModal} />
    </Box>
  );
};

export default UnitCard;
