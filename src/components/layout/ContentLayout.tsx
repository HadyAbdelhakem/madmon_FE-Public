import React, { ReactNode } from 'react';
import { Container } from '@mui/material';

interface ContentLayoutProps {
  children: ReactNode;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ children }) => {
  return (
    <Container
      sx={{
        maxWidth: { 
          xs: '100%',    // Full width for extra-small screens
          sm: '600px',   // Small screens
          md: '900px',   // Medium screens
          lg: '1200px',  // For large screens (lg)
          xl: '1280px',  // For extra-large screens (xl)
          '1440px': '1440px', // Custom value between lg and xl
        },
        padding: {
          xs: '16px',    // Add padding for small screens
          md: '24px',    // Slightly larger padding for medium screens
        },
        margin: '0 auto', // Center the container horizontally
      }}
    >
      {children}
    </Container>
  );
}

export default ContentLayout;
