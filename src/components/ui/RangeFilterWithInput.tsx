import React, { useEffect, useState } from "react";
import {
  Box,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

interface RangeFilterWithInputProps {
  title: string;
  rangeType: "totalPrice" | "monthlyInstallments"; // New prop for range type
  onRangeChange: (from: number, to: number, rangeType: "totalPrice" | "monthlyInstallments") => void; // Updated callback
  minPrice?: number;
  maxPrice?: number;
}



// Function to format the value label to show as millions (e.g., "1M", "2M")
function valueLabelFormat(value: number) {
  return `${Math.round(value / 1_000_000)}M`;
}
// Styled Slider based on the customized styles
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

const RangeFilterWithInput: React.FC<RangeFilterWithInputProps> = ({
  title,
  rangeType,
  onRangeChange,
  minPrice = 1_000_000,
  maxPrice = 8_000_000,
}) => {
  const [priceRange, setPriceRange] = useState<number[]>([minPrice, maxPrice]);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    const [from, to] = newValue as number[];
    setPriceRange([from, to]);
    onRangeChange(from, to, rangeType);
  };

  const handleInputChange = (index: number, value: string) => {
    const newRange = [...priceRange];
    newRange[index] = Math.round(Number(value) * 1_000_000);
    setPriceRange(newRange);
    onRangeChange(newRange[0], newRange[1], rangeType);
  };

  return (
    <Box sx={{ width: "100%" }} mb={5}>
      <Typography sx={{ fontSize: "16px", color: "#494949" }}>
        {title}
      </Typography>

      <Box display="flex" justifyContent="space-between" mt={2} mb={2}>
        <Box display="flex" flexDirection="column">
          <Typography
            sx={{ fontSize: "12px", color: "#A2A7AF", textAlign: "start" }}
          >
            From
          </Typography>
          <Box display="flex" alignItems="center">
            <TextField
              value={`${Math.round(priceRange[0] / 1_000_000)}M`}
              onChange={(e) =>
                handleInputChange(0, e.target.value.replace("M", ""))
              }
              variant="outlined"
              size="small"
              sx={{ width: "102px" }}
            />
            <Typography
              sx={{ color: "#0512F5", marginLeft: "8px", fontSize: "12px" }}
            >
              EGP
            </Typography>
          </Box>
        </Box>

        <Box display="flex" flexDirection="column">
          <Typography
            sx={{ fontSize: "12px", color: "#A2A7AF", textAlign: "start" }}
          >
            To
          </Typography>
          <Box display="flex" alignItems="center">
            <TextField
              value={`${Math.round(priceRange[1] / 1_000_000)}M`}
              onChange={(e) =>
                handleInputChange(1, e.target.value.replace("M", ""))
              }
              variant="outlined"
              size="small"
              sx={{ width: 102 }}
            />
            <Typography
              sx={{ color: "#0512F5", marginLeft: "8px", fontSize: "12px" }}
            >
              EGP
            </Typography>
          </Box>
        </Box>
      </Box>

      <CustomSlider
        value={priceRange}
        onChange={handleSliderChange}
        min={minPrice}
        max={maxPrice}
        valueLabelDisplay="on"
        valueLabelFormat={valueLabelFormat} // Format value labels in millions with "M"
      />
    </Box>
  );
};

export default RangeFilterWithInput;
