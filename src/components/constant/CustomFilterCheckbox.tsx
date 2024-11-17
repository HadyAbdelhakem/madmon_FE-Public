import React, { ChangeEvent } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

interface CustomFilterCheckboxProps {
  label: string;                 // Label for the checkbox
  checked: boolean;              // Checkbox state
  onChange: (checked: boolean) => void;  // Change handler
}

const CustomFilterCheckbox: React.FC<CustomFilterCheckboxProps> = ({
  label,
  checked,
  onChange,
}) => {
  // Handle checkbox state change
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  // Define unchecked icon style (empty box with blue border)
  const uncheckedIcon = (
    <span
      style={{
        borderRadius: "4px",
        width: "20px",
        height: "20px",
        display: "block",
        border: `2px solid #0512f5`,  // Blue border color
        backgroundColor: "transparent",
      }}
    />
  );

  // Define checked icon style (blue border with check icon)
  const checkedIcon = (
    <span
      style={{
        borderRadius: "4px",
        width: "20px",
        height: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: `2px solid #0512f5`,  // Blue border color
        color: "#0512f5",             // Blue color for check icon
        backgroundColor: "transparent",
      }}
    >
      <CheckIcon fontSize="small" />
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
            padding: "8px",
          }}
        />
      }
      label={label}                 // Display the label prop
      labelPlacement="end"
      sx={{
        marginLeft: 0,
        userSelect: "none",
        color: "#494949",            // Set font color to #494949 for both states
      }}
    />
  );
};

export default CustomFilterCheckbox;
