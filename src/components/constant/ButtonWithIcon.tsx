import React from 'react';
import IconButton from '@mui/material/IconButton';

interface ButtonWithIconProps {
  onClick?: () => void;
  icon: React.ReactNode; // Allows any icon or image to be passed
  ariaLabel: string;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ onClick, icon, ariaLabel }) => {
  return (
    <IconButton onClick={onClick} aria-label={ariaLabel}>
      {icon}
    </IconButton>
  );
};

export default ButtonWithIcon;
