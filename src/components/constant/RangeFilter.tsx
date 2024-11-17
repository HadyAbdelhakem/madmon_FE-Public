import React, { useState } from "react";
import { Box, Slider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface RangeFilterProps {
  title: string;
  minPrice?: number;
  maxPrice?: number;
  unit?: string;
}

// Function to format the value label to include a dynamic unit
function valueLabelFormat(value: number, unit: string) {
  return `${Math.round(value / 1_000_000)}M ${unit}`;
}

// Styled Slider component
const CustomSlider = styled(Slider)({
  color: "#0512F5",
  height: 8,
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    border: "2px solid #0512F5",
    "&:focus, &:hover, &.Mui-active": {
      boxShadow: "0px 0px 6px rgba(5, 18, 245, 0.4)",
    },
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 12,
    fontWeight: "normal",
    top: 60,
    backgroundColor: "unset",
    color: "#000",
    "&::before": {
      display: "none",
    },
  },
  "& .MuiSlider-track": {
    height: 8,
    borderRadius: 4,
  },
  "& .MuiSlider-rail": {
    height: 8,
    borderRadius: 4,
    opacity: 0.5,
    backgroundColor: "#E0E0E0",
  },
});

const RangeFilter: React.FC<RangeFilterProps> = ({
  title,
  minPrice = 1_000_000,
  maxPrice = 8_000_000,
  unit = "M"
}) => {
  const [priceRange, setPriceRange] = useState<number[]>([minPrice, maxPrice]);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  return (
    <Box sx={{ width: "100%" }} mb={6}>
      <Typography sx={{ fontSize: "16px", color: "#494949" }}>
        {title}
      </Typography>

      <CustomSlider
        value={priceRange}
        onChange={handleSliderChange}
        min={minPrice}
        max={maxPrice}
        valueLabelDisplay="on"
        valueLabelFormat={(value) => valueLabelFormat(value, unit)} // Pass unit to format function
      />
      
     
    </Box>
  );
};

export default RangeFilter;
