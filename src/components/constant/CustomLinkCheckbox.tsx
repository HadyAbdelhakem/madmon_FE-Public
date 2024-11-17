import React, { ChangeEvent } from "react";
import { Checkbox, FormControlLabel, Link } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useTranslations } from "next-intl"; // Import useTranslations for translations

const CustomLinkCheckbox = ({
  isChecked,
  setIsChecked,
}: {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const t = useTranslations("SignUpForm"); // Initialize the translation hook

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const uncheckedIcon = (
    <span
      style={{
        borderRadius: "4px",
        width: "20px",
        height: "20px",
        display: "block",
        border: `2px solid ${isChecked ? "#6666FF" : grey[500]}`,
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

  const labelContent = (
    <span>
      {t("iAgree")}{" "}
      <Link
        href="/terms"
        target="_blank"
        style={{ textDecoration: "none", color: isChecked ? "#6666FF" : "#6666FF" }}
      >
        {t("terms")}
      </Link>
      {" "} {t("and")}{" "}
      <Link
        href="/policy"
        target="_blank"
        style={{ textDecoration: "none", color: isChecked ? "#6666FF" : "#6666FF" }}
      >
        {t("privacyPolicies")}
      </Link>
    </span>
  );

  return (
    <FormControlLabel
      control={
        <Checkbox
          icon={uncheckedIcon}
          checkedIcon={checkedIcon}
          onChange={handleChange}
          checked={isChecked}
        />
      }
      label={labelContent}
      labelPlacement="end"
      sx={{
        marginLeft: 0,
        userSelect: "none",
        color: isChecked ? "#6666FF" : grey[800],
      }}
    />
  );
};

export default CustomLinkCheckbox;
