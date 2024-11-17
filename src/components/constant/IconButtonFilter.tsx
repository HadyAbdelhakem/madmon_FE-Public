import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/system";
import { SxProps } from "@mui/system";
import Image from "next/image";

interface IconButtonFilterProps {
  icon: string; // Accepts the image URL
  text: string; // Label text for the button
  selected?: boolean; // Whether the button is selected (active)
  sx?: SxProps; // Additional styling
  onClick?: () => void; // Optional onClick handler
}

// Styled button using MUI's Button and styled from MUI system
const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "selected",
})<{
  selected?: boolean;
}>(({ selected }) => ({
  backgroundColor: selected ? "transparent" : "#F3F4F6",
  borderRadius: "5px",
  border: `1px solid ${selected ? "#0512F5" : "transparent"}`, // Blue border if selected
  textTransform: "none",
  color: selected ? "#0512F5" : "#A2A7AF", // Blue text if selected, gray if not
  boxShadow: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  padding: "0", // Remove padding to make button exactly 40x40
  minWidth: "40px", // Ensure min-width matches the set width

  "&:hover": {
    boxShadow: "none",
  },
  "& img": {
    filter: selected
      ? "brightness(0) saturate(100%) invert(27%) sepia(100%) saturate(7487%) hue-rotate(245deg) brightness(100%) contrast(130%)"
      : "none", // Apply color filter if selected
  },
}));

// Styled span for the text
const StyledText = styled("span")({
  color: "#494949", // Blue color for text
  fontSize: "12px", // Custom font size
  textAlign: "center",
  display: "block", // Center-align the text
  marginTop: "4px", // Space between button and text
});

const IconButtonFilter: React.FC<IconButtonFilterProps> = ({
  icon,
  text,
  selected = false,
  sx,
  onClick,
}) => {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid size={12} display={'flex'} justifyContent={'center'}>
        <StyledButton
          variant="contained"
          selected={selected}
          sx={sx}
          onClick={onClick}
        >
          <Image src={icon} alt={text} width={24} height={24} /> {/* Set image size within button */}
        </StyledButton>
      </Grid>
      <Grid size={12}>
        <StyledText>{text}</StyledText>
      </Grid>
    </Grid>
  );
};

export default IconButtonFilter;
