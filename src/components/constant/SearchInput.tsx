import React from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import searchIcon from "../../assets/images/gray-search-icon.svg";
import Image from "next/image";

interface SearchInputProps {
  onSearchChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearchChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <Box
      sx={{
        width: {
          xs: "100%",    // Full width on small screens
          sm: "90%",     // 90% width on medium screens
          md: "70%",     // 70% width on large screens
          lg: "820px",   // Fixed width on larger screens
        },
        height: {
          xs: "50px",    // Smaller height on extra-small screens
          sm: "55px",    // Medium height on small screens
          md: "60px",    // Standard height on larger screens
        },
      }}
    >
      <TextField
        fullWidth
        placeholder="Type Location Here.."
        variant="outlined"
        onChange={handleChange}
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#F2F3F4",
              borderWidth: "2px",
            },
            "&:hover fieldset": {
              borderColor: "#F2F3F4",
              borderWidth: "2px",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#F2F3F4",
              borderWidth: "2px",
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Image
                src={searchIcon}
                alt="Search Icon"
                width={20}
                height={20}
              />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchInput;
