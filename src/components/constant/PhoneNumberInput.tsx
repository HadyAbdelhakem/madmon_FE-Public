import React, { useState } from "react";
import {
  Box,
  MenuItem,
  Select,
  TextField,
  InputAdornment,
  FormControl,
  Typography,
  SelectChangeEvent, // Import SelectChangeEvent from @mui/material
} from "@mui/material";
import { US, GB, EG, IN, CN, DE, FR, IT, JP, AU, CA, RU, SA, BR, MX } from "country-flag-icons/react/3x2"; // Import more flag components
import { useTranslations } from "next-intl";

interface PhoneNumberInputProps {
  value: string;
  onChange: (value: string) => void;
  defaultCountry: string;
  error: boolean;
  onCountryCodeChange: (code: string) => void;
}

const countryList = [
  { code: "US", name: "United States", dialCode: "+1", flag: US },
  { code: "GB", name: "United Kingdom", dialCode: "+44", flag: GB },
  { code: "EG", name: "Egypt", dialCode: "+20", flag: EG },
  { code: "IN", name: "India", dialCode: "+91", flag: IN },
  { code: "CN", name: "China", dialCode: "+86", flag: CN },
  { code: "DE", name: "Germany", dialCode: "+49", flag: DE },
  { code: "FR", name: "France", dialCode: "+33", flag: FR },
  { code: "IT", name: "Italy", dialCode: "+39", flag: IT },
  { code: "JP", name: "Japan", dialCode: "+81", flag: JP },
  { code: "AU", name: "Australia", dialCode: "+61", flag: AU },
  { code: "CA", name: "Canada", dialCode: "+1", flag: CA },
  { code: "RU", name: "Russia", dialCode: "+7", flag: RU },
  { code: "SA", name: "Saudi Arabia", dialCode: "+966", flag: SA },
  { code: "BR", name: "Brazil", dialCode: "+55", flag: BR },
  { code: "MX", name: "Mexico", dialCode: "+52", flag: MX },
  // Add more countries as needed
];

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  value,
  onChange,
  defaultCountry,
  error,
  onCountryCodeChange,
}) => {
  const [countryCode, setCountryCode] = useState(
    countryList.find((country) => country.code === defaultCountry)?.dialCode || "+20"
  );
  const t = useTranslations("PhoneNumberInput");

  // Function to handle country code change
  const handleCountryCodeChange = (e: SelectChangeEvent<string>) => {
    const selectedCountryCode = e.target.value;
    setCountryCode(selectedCountryCode);
    onCountryCodeChange(selectedCountryCode); // Pass the updated country code to the parent
  };

  // Function to restrict input to numbers only
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const numericValue = input.replace(/\D/g, ""); // Remove all non-numeric characters
    onChange(numericValue);
  };

  return (
    <Box display="flex" alignItems="center">
      <FormControl variant="outlined" sx={{ minWidth: 100 }}>
        <Select
          value={countryCode}
          onChange={handleCountryCodeChange} // Updated to handle country code change
        >
          {countryList.map((country) => (
            <MenuItem key={country.code} value={country.dialCode}>
              <Box display="flex" alignItems="center">
                {/* Render the flag component directly */}
                <country.flag
                  style={{ width: "20px", height: "14px", marginRight: "8px" }}
                />
                <Typography>{country.dialCode}</Typography>
              </Box>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        variant="outlined"
        placeholder={t("placeholder")}
        value={value}
        onChange={handlePhoneNumberChange}
        error={error}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Typography>{countryCode}</Typography>
            </InputAdornment>
          ),
        }}
        sx={{ marginLeft: 2, flex: 1 }}
      />
    </Box>
  );
};

export default PhoneNumberInput;
