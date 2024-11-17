import React from 'react';
import { Popover, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface CustomPopoverProps {
  id: string | undefined; // Allow `undefined` for `id`
  open: boolean;
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  children: React.ReactNode; // Accept any valid JSX element as children
}

const CustomPopover: React.FC<CustomPopoverProps> = ({ id, open, anchorEl, handleClose, children }) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'center', // Center vertically
        horizontal: 'right', // Align to the right of the icon
      }}
      transformOrigin={{
        vertical: 'center', // Center the popover vertically
        horizontal: 'left', // Align the left side of the popover with the right side of the icon
      }}
      PaperProps={{
        sx: {
          bgcolor: 'rgba(0, 4, 69, 0.4)', // Background color with opacity
          borderRadius: '16px', // Set border radius
          boxShadow: 2, // Optional shadow
          backdropFilter: "blur(30px)", // Apply a 30px blur to the background
          WebkitBackdropFilter: "blur(30px)", // Ensure compatibility with Safari
        },
      }}
    >
      <Box
        sx={{
          position: 'relative', // Make the Box relative to position the icon
          padding: 2,
        }}
      >
        {/* Close Icon */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute', // Position the icon absolutely
            top: 8, // Distance from the top
            right: 8, // Distance from the right
            color: 'white', // Icon color
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Render dynamic children passed from the parent */}
        {children}
      </Box>
    </Popover>
  );
};

export default CustomPopover;
