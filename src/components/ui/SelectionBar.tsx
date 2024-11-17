"use client";
import React, { useState } from "react";
import { TextField, Box, InputAdornment, Autocomplete } from "@mui/material";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl"; // Import useLocale to get current language

import buyIcon from "../../assets/images/selection-icon1.png";
import sellIcon from "../../assets/images/selection-icon2.png";
import searchIcon from "../../assets/images/selection-icon3.png";

import styles from "../../styles/components/ui/selectionBar.module.scss";
import SelectButton from "../constant/SelectButton";
import MainButton from "../constant/MainButton";

import { useAreas } from "@/hooks/useAreas"; // Import the useAreas hook
import DownloadTheApp from "./DownloadTheApp";

const SelectionBar = () => {
  const [activeButton, setActiveButton] = useState("");
  const [openDownloadAppModal, setOpenDownloadAppModal] = useState(false);  // State to control the modal

  const handleSelectSeller = () => {
    if (activeButton === 'sell') {
      setOpenDownloadAppModal(true);  // Open the modal when "seller" is selected and submit is clicked
    }
  };

  // Fetch areas using the custom hook
  const { data, isLoading } = useAreas();

  // Detect the current language
  const currentLanguage = useLocale();

  // Extract the location names based on current language (fallback to empty array if no data)
  const locations =
    data?.data.map((area) =>
      currentLanguage === "en" ? area.name_en : area.name_ar
    ) || [];

  const handleClick = (button: string) => {
    setActiveButton(activeButton === button ? "" : button); // Toggle active state
  };

  const t = useTranslations("SearchBar");

  return (
    <Box
      className={styles.selectBar}
      sx={{
        maxWidth: { xs: "328px", sm: "none" }, // Max width of 328px on mobile
      }}
    >
      {/* Buy Button */}
      <SelectButton
        activeButton={activeButton}
        buttonLabel={t("buyButton")}
        buttonValue="buy"
        handleClick={handleClick}
        iconSrc={buyIcon}
        iconAlt="buy"
      />

      {/* Sell Button */}
      <SelectButton
        activeButton={activeButton}
        buttonLabel={t("sellButton")}
        buttonValue="sell"
        handleClick={handleClick}
        iconSrc={sellIcon}
        iconAlt="sell"
      />

      {/* Location Input Field */}
      <Autocomplete
        freeSolo
        fullWidth
        options={locations}
        loading={isLoading} // Show loading indicator if data is being fetched
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder={t("searchInputPlaceholder")}
            sx={{
              flexGrow: 5, // Adjust this value based on your layout needs
              flexBasis: 0, // Start at 0 and grow
              backgroundColor: "white",
              borderRadius: "10px",
              marginBottom: 0,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent",
                },
                "&:hover fieldset": {
                  borderColor: "gray",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main", // Use your primary color variable
                },
              },
            }}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <Image src={searchIcon} alt="Search Icon" />
                </InputAdornment>
              ),
            }}
          />
        )}
      />

      {/* Submit Button */}
      <MainButton
        text={t("submit")} // Use the translated text for the Submit button
        width="250px"
        height="45px"
        onClick={handleSelectSeller}
      />      {/* DownloadTheApp Modal */}
      <DownloadTheApp open={openDownloadAppModal} handleClose={() => setOpenDownloadAppModal(false)} />

    </Box>
  );
};

export default SelectionBar;
