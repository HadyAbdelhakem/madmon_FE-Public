import React from "react";
import { Box } from "@mui/material";

interface CustomDividerProps {
  width?: string | number;       // Width of the divider
  height?: string | number;      // Height (thickness) of the divider
  color?: string;                // Color of the divider
  marginTop?: string | number;   // Optional margin top for spacing
}

const CustomDivider: React.FC<CustomDividerProps> = ({
  width = "100%",
  height = "1px",
  color = "#0512F5",
  marginTop = "8px",
}) => {
  return (
    <Box
      sx={{
        width,
        height,
        backgroundColor: color,
        marginTop,
      }}
    />
  );
};

export default CustomDivider;
