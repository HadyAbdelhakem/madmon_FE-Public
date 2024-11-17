import React from "react";
import { Button } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useLocale } from "next-intl"; // Import useLocale
import styles from "../../styles/components/constant/selectButton.module.scss";

interface SelectButtonProps {
  activeButton: string;
  buttonLabel: string;
  buttonValue: string;
  handleClick: (value: string) => void;
  iconSrc: StaticImageData;
  iconAlt: string;
}

const SelectButton: React.FC<SelectButtonProps> = ({
  activeButton,
  buttonLabel,
  buttonValue,
  handleClick,
  iconSrc,
  iconAlt,
}) => {
  const locale = useLocale(); // Use the hook to get the current locale
  const isArabic = locale === "ar"; // Check if the current language is Arabic

  return (
    <Button
      className={styles.selectButton}
      sx={{
        width: { xs: "100%", md: "17%" },
        flexGrow: 1,
        backgroundColor: "white",
        height: "45px",
        color: "#0512F5",
        borderRadius: "7px",
        border:
          activeButton === buttonValue
            ? `2px solid #0512F5`
            : "2px solid transparent",
        "&:hover": {
          borderColor: activeButton === buttonValue ? "#0512F5" : "white",
        },
        fontSize: "16px",
        textTransform: "capitalize",
        fontWeight: 500,
        direction: isArabic ? "rtl" : "ltr", // Apply RTL or LTR based on the language
        display: "flex",
        alignItems: "center",
        gap: isArabic ? "8px" : "0px", // Add space between icon and text if Arabic
      }}
      startIcon={
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={24}
          height={24}
          style={{
            marginLeft: isArabic ? "8px" : "0px", // Add space to the left of the icon if Arabic
          }}
        />
      }
      onClick={() => handleClick(buttonValue)}
    >
      {buttonLabel}
    </Button>
  );
};

export default SelectButton;
