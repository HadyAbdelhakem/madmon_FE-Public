import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
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
  imageUrl,
  title,
  price,
  location,
  unitType,
  features,
  isReserved = false,
}) => {
  const router = useRouter();

  const handleReserveButton = () => {
    router.push("/reserve");
  };
  const handleRequestCall = () => {
    router.push(`/request-call/${id}`);
  };

  const unitTypeIcon = unitTypeIcons[unitType];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop: 1,
        position: "relative",
        maxWidth: "100%",
      }}
    >
      <Card
        sx={{
          width: "100%",
          borderRadius: 2,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          border: "1px solid #F2F3F4",
          backgroundColor: "#F2F3F4",
        }}
      >
        {isReserved && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: "#0512F5",
              color: "white",
              padding: "4px 8px",
              borderRadius: "0 0 15px 10px",
              fontSize: { xs: "10px", sm: "12px" },
              textAlign: "center",
              zIndex: 1000,
            }}
          >
            Reserved
          </Box>
        )}

        <CardMedia sx={{ position: "relative", height: "180px" }}>
          <Image
            src={typeof imageUrl === "string" ? imageUrl : imageUrl.src}
            alt="Unit Image"
            layout="fill"
            objectFit="cover"
          />
          {/* Favorite Button in the top-right corner */}
          <Box
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 1001,
            }}
          >
            <FavoriteButton
              backgroundColor="transparent"
              borderColor="#0000FF"
              iconColor="#0000FF"
            />
          </Box>
        </CardMedia>

        <CardContent sx={{ padding: 2 }}>
          <Typography sx={{ fontSize: { xs: "16px", sm: "18px" }, fontWeight: 600 }}>
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
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "20px" },
                fontWeight: 600,
                color: "#F20000",
              }}
            >
              {price} <span style={{ fontSize: "12px", fontWeight: 500 }}>EGP</span>
            </Typography>
          </Box>
          <Typography sx={{ fontSize: { xs: "12px", sm: "14px" }, color: "#494949", mt: 1 }}>
            {location}
          </Typography>

          {/* Unit Type Row */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 1,
            }}
          >
            <Image
              src={unitTypeIcon}
              alt="unit type icon"
              width={20}
              height={20}
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(27%) sepia(100%) saturate(7487%) hue-rotate(245deg) brightness(100%) contrast(130%)",
              }}
            />
            <Typography sx={{ fontSize: "12px", ml: 1 }}>{unitType}</Typography>
          </Box>

          {/* Features */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 1,
              gap: 1,
            }}
          >
            {features.map((feature, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                <Image src={feature.icon} alt={feature.label} width={20} height={20} />
                <Typography sx={{ fontSize: "12px", ml: 1 }}>{feature.value}</Typography>
              </Box>
            ))}
          </Box>

          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              mt: 2,
              gap: 1,
            }}
          >
            <MainButton
              text="Reserve Unit"
              width="100%"
              height="40px"
              fontSize="14px"
              onClick={handleReserveButton}
            />
            <CustomButton
              text="Request a Call"
              width="100%"
              height="40px"
              fontSize="14px"
              onClick={handleRequestCall}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SearchUnitCard;
