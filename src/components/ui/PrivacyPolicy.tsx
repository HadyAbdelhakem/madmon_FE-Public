// components/PrivacyPolicy.tsx
"use client"
import React, { useEffect, useState } from 'react';
import { usePrivacyPolicy } from '@/hooks/usePrivacyPolicy';
import { Box, Typography, CircularProgress } from '@mui/material';

const PrivacyPolicy: React.FC = () => {
  const { data, isLoading, error } = usePrivacyPolicy();
  const [isClient, setIsClient] = useState(false);

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

export default PrivacyPolicy;
