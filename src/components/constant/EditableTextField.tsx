import React, { useState, useEffect } from "react";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import Image from 'next/image'; // Import the Image component if using Next.js
import editIcon from "../../assets/images/gray-edit-icon.svg"; // Your custom edit icon

// Define the props interface, including the defaultValue and onChange function
interface EditableTextFieldProps {
  defaultValue?: string; // Default value for the text field, e.g., user's name
  onChange?: (value: string) => void; // Function to notify the parent component of changes
}

const EditableTextField: React.FC<EditableTextFieldProps> = ({ defaultValue = "User Name", onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(defaultValue); // Set initial value from the defaultValue prop

  // Update the input field when the defaultValue prop changes
  useEffect(() => {
    setValue(defaultValue); // Sync with the new defaultValue (e.g., when user name is updated)
  }, [defaultValue]);

  // Handle edit click
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue); // Notify the parent component of the updated value
    }
  };

  // Handle blur event
  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {isEditing ? (
        <TextField
          value={value}
          onChange={handleInputChange}
          onBlur={handleBlur}
          autoFocus
          sx={{
            fontWeight: 500,
            fontSize: "20px",
            color: "#494949",
        
            "& .MuiInputBase-root": {
              fontSize: "20px",
              fontWeight: 500,
              color: "#494949",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none", // Remove border to make it look like plain text
            },
          }}
        />
      ) : (
        <Typography
          component="div"
          sx={{
            fontWeight: 500,
            fontSize: "20px",
            color: "#494949",
            marginLeft: 2,
          }}
        >
          {value}
        </Typography>
      )}

      <IconButton
        onClick={handleEditClick}
        sx={{ marginLeft: 1, padding: 0 }} // Adjust margin and padding for better alignment
      >
        <Image
          src={editIcon}
          alt="Edit"
          width={20} // Set the width of the icon
          height={20} // Set the height of the icon
          style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
        />
      </IconButton>
    </Box>
  );
};

export default EditableTextField;
