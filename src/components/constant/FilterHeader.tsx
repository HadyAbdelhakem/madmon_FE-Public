import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "../../styles/components/constant/filterHeader.module.scss";

interface FilterHeaderProps {
  text: string; // Define a prop for dynamic text
}

const FilterHeader: React.FC<FilterHeaderProps> = ({ text }) => {
  return (
    <Box className={styles.headerContainer}>
      <Typography className={styles.headerText}>{text}</Typography>
    </Box>
  );
};

export default FilterHeader;
