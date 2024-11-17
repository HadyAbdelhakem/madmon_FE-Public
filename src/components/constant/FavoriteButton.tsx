import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image'; // Use Next.js Image component for optimized images
import FavoriteIcon from "../../assets/images/favorite-icon.svg"; // Custom SVG icon import

interface FavoriteButtonProps {
  onClick?: () => void; // Optional click handler
  backgroundColor?: string; // Background color for the button
  borderColor?: string; // Border color for the button
  iconColor?: string; // Icon color (if you want to change color of SVG)
}

// Styled Button component
const StyledButton = styled(Button)<{
  backgroundColor?: string;
  borderColor?: string;
  iconColor?: string;
}>(({ backgroundColor, borderColor, iconColor }) => ({
  backgroundColor: backgroundColor || 'transparent', // Default to transparent if not provided
  border: `2px solid ${borderColor || '#0000FF'}`, // Default border to blue
  borderRadius: '5px', // Border radius for rounded corners
  width: '42px', // Set width to 42px
  height: '42px', // Set height to 42px
  padding: '8px', // Padding around the icon (adjust as needed)
  minWidth: 'auto', // Remove default button width
  color: iconColor || '#0000FF', // Icon color, default to blue
  display: 'flex', // Flexbox for centering content
  justifyContent: 'center', // Center icon horizontally
  alignItems: 'center', // Center icon vertically
  '&:hover': {
    backgroundColor: backgroundColor || '#f5f5f5', // Light background on hover
  },
}));

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  onClick,
  backgroundColor,
  borderColor,
  iconColor,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      iconColor={iconColor}
    >
      <Image
        src={FavoriteIcon} // Use the imported SVG icon
        alt="Favorite Icon"
        width={24} // Icon width inside the button
        height={24} // Icon height inside the button
      />
    </StyledButton>
  );
};

export default FavoriteButton;
