import React from 'react';
import { useRouter } from 'next/navigation'; // Usage: App router
import Button from '@mui/material/Button';

const FormBackButton = () => {
  const router = useRouter(); // Next.js router hook

  const handleBack = () => {
    router.back(); // Go back to the previous page
  };

  return (
    <Button
      onClick={handleBack}
      disableRipple // This will disable the ripple effect
      sx={{
        alignSelf: 'flex-start',
        textTransform: 'none',
        fontSize: '16px', // Adjust font size to match the image
        fontWeight: 500,
        height: '42px',
        minWidth: '295px', // Adjust minimum width if needed
    
        color: "#333", // Darker text color
        border: '1px solid #333', // Thin border to match the image
        borderRadius: '10px', // Rounded corners to match the image
        '&:hover': {
          backgroundColor: 'transparent', // No background change on hover
          borderColor: '#333', // Keep the border color the same on hover
          textDecoration: 'none', // No text decoration on hover
        },
        '&:active': {
          boxShadow: 'none', // No shadow on active (click)
          backgroundColor: 'transparent', // No background change on active
        },
        '&:focus': {
          outline: 'none', // No outline on focus
        },
        '&.Mui-focusVisible': {
          outline: 'none', // No outline when focus is visible
        },
      }}
    >
      Back
    </Button>
  );
};

export default FormBackButton;
