import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Box,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
// import DeleteIcon from "../../assets/images/delete.png";
import Icon1 from "../../assets/images/vector.svg";
import Icon2 from "../../assets/images/vector(1).svg";
import Icon3 from "../../assets/images/vector(2).svg";
import Icon4 from "../../assets/images/brokerIcon.svg";
import CancelButton from "../constant/CancelButton";
import Link from "next/link";
import { getStatusLabel } from "@/utils/statusUtils";
import DownloadTheApp from "./DownloadTheApp";

interface UnitCardMobileProps {
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

const UnitCardMobile: React.FC<UnitCardMobileProps> = ({
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
  // onDelete,
}) => {
  const { label: statusLabel, color: statusColor } = getStatusLabel(status);
    // State for controlling the modal
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 1 }}>
      <Link style={{ textDecoration: "none" }} href="/my-units" passHref>
        <Card
          sx={{
            width: "100%",
            borderRadius: 2,
            backgroundColor: "#F2F3F4",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            mt: 3,
          }}
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
                fontSize: 12,
                textAlign: "center",
                zIndex: 1000,
              }}
            >
              Reserved
            </Box>
          )}

          {/* Image */}
          <CardMedia sx={{ position: "relative", height: "180px" }}>
            <Image
              src={typeof imageUrl === "string" ? imageUrl : imageUrl.src}
              alt="Unit Image"
              layout="fill"
              objectFit="cover"
            />
          </CardMedia>

          <CardContent sx={{ padding: 2 }}>
            <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
              {title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: 1,
              }}
            >
              <Box
                sx={{
                  backgroundColor: statusColor,
                  color: "white",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontSize: "12px",
                }}
              >
                {statusLabel}
              </Box>
              <Typography
                sx={{ fontSize: "20px", fontWeight: 600, color: "#F20000" }}
              >
                {price.toLocaleString()}{" "}
                <span style={{ fontSize: "14px", fontWeight: 500 }}>EGP</span>
              </Typography>
            </Box>
            <Typography sx={{ fontSize: "14px", color: "#494949", mt: 1 }}>
              {description}
            </Typography>

            {/* Icons Row */}
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Box display="flex" alignItems="center">
                <Image src={Icon1} alt="Icon" unoptimized />
                <Typography sx={{ fontSize: "12px", ml: 1, mr: 1 }}>
                  {rooms} Rooms
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Image src={Icon2} alt="Icon" unoptimized />
                <Typography sx={{ fontSize: "12px", ml: 1, mr: 1 }}>
                  {bathrooms} Bathrooms
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Image src={Icon3} alt="Icon" unoptimized />
                <Typography sx={{ fontSize: "12px", ml: 1 }}>
                  {space} m²
                </Typography>
              </Box>
            </Box>

            {/* Assign Broker and Date */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                mt: 2,
              }}
            >
              {!assignedBroker && statusLabel !== "Rejected" && (
                <CancelButton
                text="Assign a Broker"
                width="295px"
                height="42px"
                fontSize="16px"
                onClick={handleOpenModal} // Open modal on click
              />
              )}
              {assignedBroker && statusLabel !== "Rejected" && (
                <Box display="flex" alignItems="center" mt={2}>
                  <Image
                    src={Icon4}
                    alt="Icon"
                    width={24}
                    height={24}
                    unoptimized
                  />
                  <Typography sx={{ fontSize: "14px", ml: 1 }}>
                    {assignedBroker}
                  </Typography>
                </Box>
              )}
          
            </Box>
          </CardContent>

          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 0,
              mb: 2,
            }}
          >
            {/* <Box
              onClick={onDelete}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "295px",
                height: "42px",
                backgroundColor: "#f27a7b",
                color: "white",
                borderRadius: "8px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#e63946",
                },
              }}
            >
              <Image
                src={DeleteIcon}
                alt="Delete"
                width={24}
                height={24}
                unoptimized
              />
              <Typography sx={{ ml: 1 }}>Delete</Typography>
            </Box> */}
          </CardActions>
        </Card>
      </Link>
         {/* DownloadTheApp Modal */}
         <DownloadTheApp open={modalOpen} handleClose={handleCloseModal} />
    </Box>
  );
};

export default UnitCardMobile;
