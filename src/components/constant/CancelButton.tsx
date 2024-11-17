import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

interface CancelButtonProps {
  text: string; // Text to display on the button
  width?: string | number; // Button width, can be responsive
  height?: string | number; // Button height, can be responsive
  fontSize?: string | number; // Font size, can be responsive
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const StyledButton = styled(Button)<{
  fontSize?: string | number;
}>(({ fontSize }) => ({
  backgroundColor: '#FFFFFF', // Default background color
  borderRadius: '7px',
  color: '#6666FF', // Default text color
  border: '1px solid #6666FF', // Default border color
  textTransform: 'none', // No text capitalization
  boxShadow: 'none', // Remove default shadow
  transition: 'all 0.3s ease', // Smooth transition for hover effects
  fontSize: fontSize, // Set font size based on prop
  '&:hover': {
    backgroundColor: '#6666FF', // Background on hover
    color: '#FFFFFF', // Text color on hover
    borderColor: '#6666FF', // Border color remains the same on hover
    boxShadow: 'none', // Ensure no shadow on hover as well
  },
}));

const CancelButton: React.FC<CancelButtonProps> = ({ 
  text, 
  width = '350px', 
  height = '47px', 
  fontSize = '16px', 
  onClick 
}) => {
  return (
    <StyledButton 
      variant="contained" 
      color="primary"
      sx={{
        width: { xs: width as string | number, sm: width as string | number },
        height: { xs: height as string | number, sm: height as string | number, md: '42px' },
      }}
      fontSize={fontSize} 
      onClick={onClick} // Handle click events
    >
      {text}
    </StyledButton>
  );
};

export default CancelButton;
