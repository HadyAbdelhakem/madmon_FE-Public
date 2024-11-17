import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { SxProps } from '@mui/system';

// Interface for the button's props
interface CustomButtonProps {
  text: string; // text to display on the button
  width?: string | number; // 'full' can be passed for full width
  height?: string | number;
  fontSize?: string; // optional font size
  sx?: SxProps; // Accept MUI's sx prop for styling
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Updated to accept MouseEvent
}

// Styled button using MUI's `Button` component and `styled` from MUI system
const StyledButton = styled(Button)<{
  width?: string | number;
  height?: string | number;
  fontSize?: string;
}>(({ width, height, fontSize }) => ({
  backgroundColor: 'transparent', // transparent background
  borderRadius: '7px',
  borderColor: "#0512F5",
  border: `2px solid #0512F5`, // border color matches text color
  textTransform: 'none', // no text capitalization
  color: '#0512F5',
  boxShadow: 'none', // removing the default shadow
  width: width === 'full' ? '100%' : width, // full width option
  height: height || '47px', // default height
  fontSize: fontSize || '16px', // default font size
  '&:hover': {
    boxShadow: 'none', // ensure no shadow on hover
  },
}));

// The CustomButton component definition
const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  width = '350px', // default width
  height = '47px', // default height
  fontSize = '16px', // default font size
  sx, // Accept sx prop for additional styling
  onClick, // Accept onClick prop
  ...props // Forward other props
}) => {
  return (
    <StyledButton
      variant="contained"
      width={width}
      height={height}
      fontSize={fontSize}
      sx={sx} // Apply the passed sx prop
      onClick={onClick} // Apply the onClick prop
      {...props} // Forward other props to the StyledButton
    >
      {text}
    </StyledButton>
  );
};

export default CustomButton;
