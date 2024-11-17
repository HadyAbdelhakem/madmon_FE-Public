import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface DownloadButtonProps {
  label: string;
  iconSrc: string;
  onClick?: () => void;
}

const StyledButton = styled(Button)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "6px 12px",
  backgroundColor: "#ffffff",
  color: "#000000",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
  textTransform: "none",
  width: "199px",
  height: "64px",
  borderRadius: "5px",
  border: "1px solid #494949",

  [theme.breakpoints.down("sm")]: {
    width: "90px",
    height: "40px",
  },
}));

const TextOverlay = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "#494949",
  fontSize: "10px",
  zIndex: 2,
  textTransform: "uppercase",
  fontWeight: 500,

  [theme.breakpoints.down("sm")]: {
    fontSize: "8px",
  },
}));

const ResponsiveImage = styled(Image)(({ theme }) => ({
  position: "absolute",
  zIndex: 1,


  [theme.breakpoints.down("sm")]: {
    width: "55px", // Adjust icon size for small screens
    height: "55px",
  },
  [theme.breakpoints.down("xs")]: {
    width: "18px", // Further adjust for extra-small screens
    height: "18px",
  },
}));

const DownloadButton: React.FC<DownloadButtonProps> = ({
  label,
  iconSrc,
  onClick,
}) => {
  return (
    <Box
      style={{ textDecoration: "none", cursor: "pointer" }}
      onClick={onClick}
    >
      <StyledButton>
        <ResponsiveImage src={iconSrc} alt={label} />
        <TextOverlay>{label}</TextOverlay>
      </StyledButton>
    </Box>
  );
};

export default DownloadButton;
