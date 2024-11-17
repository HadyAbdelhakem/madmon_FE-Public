import React from "react";
import Button from "@mui/material/Button";
import { SxProps } from "@mui/system";

interface ActionButtonProps {
  customColor: string;
  fontSize: string;
  width: string;
  height: string;
  label: string;
  onClick?: () => void;
  sx?: SxProps; // Additional styles if needed
}

const ActionButton: React.FC<ActionButtonProps> = ({
  customColor,
  fontSize,
  width,
  height,
  label,
  onClick,
  sx,
}) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{
        color: customColor,
        borderColor: customColor,
        fontSize: fontSize,
        width: width,
        height: height,
        "&:hover": {
          backgroundColor: `${customColor}1A`, // Adds transparency on hover
          borderColor: customColor,
        },
        ...sx, // Additional styles if passed
      }}
    >
      {label}
    </Button>
  );
};

export default ActionButton;
