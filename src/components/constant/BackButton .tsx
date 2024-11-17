import React from 'react';
import { useRouter } from 'next/navigation'; // Usage: App router
import Button from '@mui/material/Button';
import { useTranslations } from 'next-intl'; // Import useTranslations

const BackButton = () => {
  const router = useRouter(); // Next.js router hook
  const t = useTranslations('BackButton'); // Initialize the translation hook, and "BackButton" should be your translation key namespace

  const handleBack = () => {
    router.back(); // Go back to the previous page
  };

  return (
    <Button
      onClick={handleBack}
      disableRipple // This will disable the ripple effect
      sx={{
        alignSelf: 'flex-start',
        margin: '20px 0 0 10px',
        textTransform: 'none',
        fontSize: '20px',
        height: "30px",
        color: "#0512F5",
        '&:hover': {
          backgroundColor: 'transparent', // No background change on hover
          textDecoration: 'none' // No text decoration on hover
        },
        '&:active': {
          boxShadow: 'none', // No shadow on active (click)
          backgroundColor: 'transparent' // No background change on active
        },
        '&:focus': {
          outline: 'none' // No outline on focus
        },
        '&.Mui-focusVisible': {
          outline: 'none' // No outline when focus is visible
        }
      }}
    >
      {t('back')} {/* Use the translation key 'back' */}
    </Button>
  );
};

export default BackButton;
