import React, { ReactNode } from 'react';
import { Container } from '@mui/material';

interface LoggedInLayoutProps {
  children: ReactNode;
}

const LoggedInLayout: React.FC<LoggedInLayoutProps> = ({ children }) => {
  return (
    <Container
      sx={{
        maxWidth: { 
          lg: '1200px',  // For large screens (lg)
          xl: '1280px',  // For extra-large screens (xl)
          '1440px': '1440px', // Custom value between lg and xl
        },
        mt: 20,
      }}
    >
      {children}
    </Container>
  );
}

export default LoggedInLayout;
