import React from 'react';
import { Button, Box } from '@mui/material';
import Image from 'next/image';

interface ViewButtonProps {
  backgroundColor?: string; // Dynamic background color
  icon: string; // Icon as a string path (SVG or image)
  onClick?: () => void; // Optional onClick handler
  borderColor?: string; // Dynamic border color, defaults to backgroundColor if not provided
}

const ViewButton: React.FC<ViewButtonProps> = ({
  backgroundColor = '#E0E0E0',
  icon,
  onClick,
  borderColor,
}) => {
  // Default the borderColor to backgroundColor if it's not provided
  const dynamicBorderColor = borderColor || backgroundColor;

  return (
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: backgroundColor,
        borderRadius: '12px',
        minWidth: { xs: '40px', sm: '48px', md: '56px' }, // Responsive minWidth
        minHeight: { xs: '40px', sm: '48px', md: '56px' }, // Responsive minHeight
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: `2px solid ${dynamicBorderColor}`,
        '&:hover': {
          backgroundColor: backgroundColor,
        },
      }}
    >
      <Box
        sx={{
          width: { xs: '20px', sm: '22px', md: '24px' }, // Responsive icon size
          height: { xs: '20px', sm: '22px', md: '24px' },
        }}
      >
        <Image src={icon} alt="view-icon" layout="responsive" width={24} height={24} />
      </Box>
    </Button>
  );
};

export default ViewButton;
