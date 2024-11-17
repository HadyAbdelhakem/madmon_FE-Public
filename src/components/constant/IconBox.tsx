import React from 'react';
import { Box, IconButton } from '@mui/material';
import Image from 'next/image';

interface IconBoxProps {
  iconSrc: string;
  iconAlt: string;
  iconWidth?: number;
  iconHeight?: number;
  onClick?: () => void;
  sx?: object; // Add the sx prop here for custom styling
}

const IconBox: React.FC<IconBoxProps> = ({
  iconSrc,
  iconAlt,
  iconWidth = 17,
  iconHeight = 17,
  onClick,
  sx, // Accept sx or style
}) => {
  return (
    <Box
      sx={{
        width: "35px",
        height: "35px",
        backgroundColor: "#6666FF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        ...sx, // Merge custom styles with default styles
      }}
    >
      <IconButton onClick={onClick} aria-label={iconAlt}>
        <Image src={iconSrc} alt={iconAlt} width={iconWidth} height={iconHeight} />
      </IconButton>
    </Box>
  );
};

export default IconBox;
