import React from "react";
import {
  Box,
  TextField,
  Typography,
  MenuItem,
  Select,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";
import CustomDivider from "../constant/CustomDivider";
import RangeFilter from "../constant/RangeFilter";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const years = Array.from(
  new Array(30),
  (_, index) => new Date().getFullYear() - index
); // Last 30 years

const BrokerFilter: React.FC = () => {
  const [search, setSearch] = React.useState<string>("");
  const [month, setMonth] = React.useState<string>("");
  const [year, setYear] = React.useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleMonthChange = (event: SelectChangeEvent<string>) => {
    setMonth(event.target.value as string);
  };

  const handleYearChange = (event: SelectChangeEvent<string>) => {
    setYear(event.target.value as string);
  };

  return (
    <Box display="flex" flexDirection="column" gap={3} width="100%">
      <Box>
        <Typography sx={{ fontSize: "16px", color: "#494949" }}>
          Search By Name
        </Typography>
        <TextField
          placeholder="Search by Name"
          value={search}
          onChange={handleSearchChange}
          variant="outlined"
          fullWidth
          sx={{
            mt: 1,
            "& .MuiInputBase-input::placeholder": {
              fontSize: "12px",
            },
          }}
        />
      </Box>

      <Box>
        <Typography sx={{ fontSize: "16px", color: "#494949" }}>
          Joined Date
        </Typography>
        <Box display="flex" gap={2} mt={1}>
          <FormControl fullWidth variant="outlined">
            <Select
              value={month}
              onChange={handleMonthChange}
              displayEmpty
              renderValue={(selected) => (selected ? selected : "Month")}
            >
              {months.map((month, index) => (
                <MenuItem key={index} value={month}>
                  {month}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth variant="outlined">
            <Select
              value={year}
              onChange={handleYearChange}
              displayEmpty
              renderValue={(selected) => (selected ? selected : "Year")}
            >
              {years.map((year, index) => (
                <MenuItem key={index} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>

      <CustomDivider />

      <Box>
        <RangeFilter title="Number of Properties Sold" minPrice={2000000} maxPrice={5000000} unit="Properties" />
        <RangeFilter title="Gross Value of Units Sold" minPrice={2000000} maxPrice={5000000} unit="EGP" />
        <RangeFilter title="Number of Clients Sold to" minPrice={2000000} maxPrice={5000000} unit="Client" />
        <RangeFilter title="Average Time of Closing" minPrice={2000000} maxPrice={5000000} unit="Days" />
      </Box>
    </Box>
  );
};

export default BrokerFilter;
