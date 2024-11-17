import React, { ChangeEvent } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useTranslations } from "next-intl"; // Import useTranslations

interface CustomCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ checked, onChange }) => {
  const t = useTranslations("Login"); // Use the Login namespace for translations

  // Handle checkbox state change
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  const uncheckedIcon = (
    <span
      style={{
        borderRadius: "4px",
        width: "20px",
        height: "20px",
        display: "block",
        border: `2px solid ${checked ? "#0512f5" : grey[500]}`,
        backgroundColor: "transparent",
      }}
    />
  );

  const checkedIcon = (
    <span
      style={{
        borderRadius: "4px",
        width: "20px",
        height: "20px",
        display: "block",
        border: `2px solid #0512f5`,
        backgroundColor: "transparent",
        position: "relative",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: "4px",
          left: "4px",
          right: "4px",
          bottom: "4px",
          backgroundColor: "#0512f5",
          borderRadius: "2px",
        }}
      />
    </span>
  );

  return (
    <FormControlLabel
      control={
        <Checkbox
          icon={uncheckedIcon}
          checkedIcon={checkedIcon}
          onChange={handleChange}
          checked={checked}
          sx={{
            "span.MuiCheckbox-root": {
              padding: "9px",
            },
          }}
        />
      }
      label={t("rememberMe")} // Use the "rememberMe" translation from the Login namespace
      labelPlacement="end"
      sx={{
        marginLeft: 0,
        userSelect: "none",
        color: checked ? "#0512f5" : grey[500],
      }}
    />
  );
};

export default CustomCheckbox;
