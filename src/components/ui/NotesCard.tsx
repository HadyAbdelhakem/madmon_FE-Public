// NotesCard.js
import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "../../styles/components/ui/notesCard.module.scss";

interface NotesCardProps {
  notesText: string | null |undefined;
}

const NotesCard: React.FC<NotesCardProps> = ({ notesText }) => {
  return (
    <Box className={styles.mainContainer}>
      <Typography className={styles.header}>Notes</Typography>
      <Box className={styles.cardContainer}>
        <Typography className={styles.notesText}>
          {notesText}
        </Typography>
      </Box>
    </Box>
  );
};

export default NotesCard;
