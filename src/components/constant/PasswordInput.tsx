"use client";
import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import styles from "../../styles/components/forms/loginForm.module.scss";
import { SxProps, Theme } from '@mui/material'; // Import SxProps and Theme from MUI

interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string; // Add the placeholder prop as optional
  sx?: SxProps<Theme>; // Optional sx prop for custom styles
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange, placeholder, sx }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  // Customize the icon color here
  const iconColor = "#0512f5"; // Change to any color you like

  return (
    <OutlinedInput
      className={styles.input}
      type={showPassword ? 'text' : 'password'}
      value={value} // Use the value prop passed from the parent
      onChange={onChange} // Use the onChange prop passed from the parent
      placeholder={placeholder} // Apply the placeholder prop
      sx={sx} // Apply the sx prop
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
            sx={{ color: iconColor, height: "52px" }} // Apply the custom color here
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      }
      fullWidth
    />
  );
};

export default PasswordInput;
