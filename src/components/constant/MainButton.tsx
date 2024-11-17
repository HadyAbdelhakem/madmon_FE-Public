import React from "react";
import Button from "@mui/material/Button";
import { styled, SxProps } from "@mui/system";
import { Theme } from "@mui/material";

interface MainButtonProps {
  text: string; // text is required
  width?: string | number; // optional, 'full' can be passed for full width or a string/number
  height?: string | number; // optional height
  fontSize?: string | { xs?: string; sm?: string; md?: string }; // optional font size, can be a string or responsive object
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // optional, correct type for onClick event
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"]; // optional button type
  sx?: SxProps<Theme>; // Optional sx prop for custom styles
  disabled?: boolean; // Optional disabled prop
}

// Styled Button component
const StyledButton = styled(Button)<{
  width?: string | number;
  height?: string | number;
  fontSize?: string | { xs?: string; sm?: string; md?: string };
}>(({ theme, width, height, fontSize }) => ({
  backgroundColor: '#0512f5', // Example color
  borderRadius: '7px',
  textTransform: 'none', // No text capitalization
  width: width === 'full' ? '100%' : width, // If 'full', take 100% width; otherwise, use passed width
  height: height, // Apply height dynamically

  // Set font size based on whether fontSize is a string or responsive object
  fontSize: typeof fontSize === 'string' 
    ? fontSize // Directly use the string if fontSize is a string
    : fontSize?.xs, // Use xs size from the object if provided
  
  [theme.breakpoints.up('sm')]: {
    fontSize: typeof fontSize === 'object' ? fontSize?.sm : fontSize, // Use sm if fontSize is an object, otherwise fallback
  },
  [theme.breakpoints.up('md')]: {
    fontSize: typeof fontSize === 'object' ? fontSize?.md : fontSize, // Use md if fontSize is an object, otherwise fallback
  },
}));


const MainButton: React.FC<MainButtonProps> = ({
  text,
  width = "350px",
  height = "47px",
  fontSize = "16px",
  onClick,
  type = "button",
  sx = {}, // Default empty sx object
  disabled = false, // Add disabled prop with a default value of false
}) => {
  return (
    <StyledButton
      variant="contained"
      color="primary"
      width={width}
      height={height}
      fontSize={fontSize} // pass fontSize as a prop (can be responsive)
      onClick={onClick} // Pass the onClick prop to the Button component
      type={type} // Pass the type prop to the Button component
      sx={sx} // Apply the custom sx prop for additional styles
      disabled={disabled} // Pass the disabled prop to the Button component
    >
      {text}
    </StyledButton>
  );
};

export default MainButton;
