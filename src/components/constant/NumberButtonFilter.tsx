import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/system";
import { SxProps } from "@mui/system";

interface NumberButtonFilterProps {
  number: number | string; // Number to display on the button
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
  fontSize: "16px", // Custom font size for the number text
  fontWeight:600,   

  "&:hover": {
    boxShadow: "none",
  },
}));

const NumberButtonFilter: React.FC<NumberButtonFilterProps> = ({
  number,
  selected = false,
  sx,
  onClick,
}) => {
  return (
    <Grid >
      <StyledButton
        variant="contained"
        selected={selected}
        sx={sx}
        onClick={onClick}
      >
        {number}
      </StyledButton>
    </Grid>
  );
};

export default NumberButtonFilter;
