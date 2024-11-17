import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

interface ActiveButtonProps {
  text: string;
  width?: string | number;
  height?: string | number;
  fontSize?: string;
  onClick?: () => void;
  icon?: React.ReactNode; // Optional icon to display
  disabled?: boolean; // Optional disabled prop
}

const StyledButton = styled(Button)<{ width?: string | number; height?: string | number; fontSize?: string }>(
  {
    backgroundColor: '#6666FF',
    borderRadius: '7px',
    color: '#FFFFFF',
    border: '1px solid #6666FF',
    textTransform: 'none',
    boxShadow: 'none',
    transition: 'all 0.3s ease',
  },
  ({ width, height, fontSize }) => ({
    width: width === 'full' ? '100%' : width,
    height: height,
    fontSize: fontSize,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px', // Space between icon and text
    '&:hover': {
      backgroundColor: '#FFFFFF',
      color: '#6666FF',
      borderColor: '#6666FF',
      boxShadow: 'none',
    },
  })
);

const ActiveButton: React.FC<ActiveButtonProps> = ({
  text,
  width = '350px',
  height = '47px',
  fontSize = '16px',
  onClick,
  icon,
  disabled = false, // default disabled to false
}) => {
  return (
    <StyledButton
      variant="contained"
      color="primary"
      width={width}
      height={height}
      style={{ fontSize }}
      onClick={onClick}
      disabled={disabled} // Pass the disabled prop to the Button component
    >
      {icon && <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>}
      {text}
    </StyledButton>
  );
};

export default ActiveButton;
