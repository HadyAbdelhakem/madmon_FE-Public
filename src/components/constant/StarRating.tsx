import React from 'react';
import { Box, Typography, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

interface StarRatingProps {
  title: string;
  value: number;
}

const StarRating: React.FC<StarRatingProps> = ({ title, value }) => {
  return (
    <Box mb={2}>
      <Typography sx={{ fontSize: '16px', fontWeight: 'bold', color: '#494949', mb: 0.5 }}>
        {title}
      </Typography>
      <Rating
        name={title}
        value={value}
        precision={1}
        icon={<StarIcon fontSize="inherit" htmlColor="yellow" />}
        emptyIcon={<StarIcon fontSize="inherit" htmlColor="lightgray" />}
      />
    </Box>
  );
};

export default StarRating;
