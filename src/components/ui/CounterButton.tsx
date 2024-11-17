import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

interface CounterButtonProps {
  text: string; // text to display on the button
  width?: string | number; // 'full' can be passed for full width
  height?: string | number;
  fontSize?: string; // optional font size
  onClick?: () => void; // optional onClick handler
}

const StyledButton = styled(Button)<{ width?: string | number; height?: string | number; fontSize?: string }>(
  ({ theme, width, height, fontSize }) => ({
    backgroundColor: '#F2DB00', // initial background color
    borderRadius: '7px',
    color: '#000000', // initial text color
    border: '1px solid #F2DB00', // initial border color
    textTransform: 'none', // no text capitalization
    boxShadow: 'none', // remove default shadow
    transition: 'all 0.3s ease', // smooth transition for hover effects
    width: width === 'full' ? '100%' : width,
    height: height,
    fontSize: fontSize, // apply font size dynamically

    // Responsive styles
    [theme.breakpoints.down('sm')]: {
      width: '100%', // Full width on small screens
      height: '40px', // Adjust height for small screens
      fontSize: '14px', // Adjust font size for small screens
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%', // Full width on extra-small screens
      height: '35px', // Smaller height for extra-small screens
      fontSize: '12px', // Smaller font size for extra-small screens
    },

    '&:hover': {
      backgroundColor: '#F2DB00', // background on hover
      color: '#000000', // text color on hover
      borderColor: '#F2DB00', // border color on hover
      boxShadow: 'none', // ensure no shadow on hover as well
    },
  })
);

const CounterButton: React.FC<CounterButtonProps> = ({ text, width = '350px', height = '47px', fontSize = '16px', onClick }) => {
  return (
    <StyledButton 
      variant="contained" 
      color="primary" 
      width={width} 
      height={height} 
      fontSize={fontSize} 
      onClick={onClick}  // Use the optional onClick function
    >
      {text}
    </StyledButton>
  );
};

export default CounterButton;
