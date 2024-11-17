import React from 'react';
import { Box, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image'; // If you're using Next.js Image for optimization

interface EmptyInputProps {
  text: string;
  iconSrc: string | StaticImageData; // Accept both string and StaticImageData
  onClick?: () => void; // Optional onClick handler
}

const EmptyInput: React.FC<EmptyInputProps> = ({ text, iconSrc, onClick }) => {
  return (
    <Box
      onClick={onClick} // Attach the onClick handler to the Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer', // Adds a pointer cursor on hover
        color: '#0512F5', // Blue text color
        '&:hover': {
          textDecoration: 'underline', // Optional hover effect to underline the text
        },
      }}
    >
      {/* Custom Icon */}
      <Image
        src={iconSrc}
        alt="custom icon"
        width={16} // Adjust the width of the icon
        height={16} // Adjust the height of the icon
        style={{ marginRight: '8px' }} // Add some space between the icon and the text
      />

      {/* Dynamic Text */}
      <Typography
        sx={{
          fontSize: '18px',
          color: '#0512F5',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default EmptyInput;
