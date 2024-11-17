"use client"
import React, { useEffect, useState } from 'react';
import { useTermsAndConditions } from '@/hooks/useTerms';
import { Box, Typography, CircularProgress } from '@mui/material';

const TermsAndConditions: React.FC = () => {
  const { data, isLoading, error } = useTermsAndConditions();
  const [isClient, setIsClient] = useState(false);

  // Check if the component is mounted on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isLoading) {
    return <CircularProgress />; // Loading spinner while data is being fetched
  }

  if (error) {
    return <Typography color="error">Something went wrong: {error.message}</Typography>; // Display error message
  }

  if (!isClient) {
    return null; // Prevent rendering on the server side
  }

  return (
    <Box>
      <Typography ml={2} component="div" dangerouslySetInnerHTML={{ __html: data?.data.title || '' }} />
      <Box mt={2}>
        <Typography
          component="div"
          dangerouslySetInnerHTML={{ __html: data?.data.description_en || '' }}
        />
      </Box>
    </Box>
  );
};

export default TermsAndConditions;
