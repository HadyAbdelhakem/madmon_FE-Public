import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import notFoundResults from "../../assets/images/No-Result.svg"

const NotFoundResult: React.FC = () => {
  return (
    <>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
    
        <Image
          src={notFoundResults} // Replace with your custom image path
          alt="No Results Icon"
          width={206} // Adjust width as needed
          height={206} // Adjust height as needed
        />
      </Box>
      <Box mt={2} mb={2} textAlign="center">
        <Typography sx={{color:"#A2A7AF",fontSize:'18px',fontWeight:500}}>
          No Results Yet
        </Typography>
      </Box>
      </>

  );
};

export default NotFoundResult;
