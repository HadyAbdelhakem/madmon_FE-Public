import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import editIcon from "../../assets/images/edit.png";
import Image from 'next/image';
import { useTranslations } from 'next-intl'; // Import useTranslations for translations

interface EditableIconProps {
  onClick: () => void;
}

const EditableIcon = ({ onClick }: EditableIconProps) => {
  const [hover, setHover] = useState(false);
  const t = useTranslations("ProfileCard"); // Use the "common" namespace for translations

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <IconButton
        aria-label={t("edit")} // Use translated label for accessibility
        onClick={onClick}
        sx={{
          backgroundColor: "transparent",
          borderRadius: "4px",
          border: "1px solid #0512F5",
          padding: "2px",
          "&:hover": {
            backgroundColor: "rgba(5, 18, 245, 0.1)",
          },
          width: 38,
          height: 38,
        }}
      >
        <Image src={editIcon.src} alt={t("edit")} width={20} height={20} /> {/* Use translated alt text */}
      </IconButton>
      {hover && (
        <Typography
          sx={{
            position: 'absolute',
            bottom: '-25px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#0512F5',
            fontSize: '16px',
            whiteSpace: 'nowrap',
          }}
        >
          {t("edit")} {/* Display translated "Edit" text */}
        </Typography>
      )}
    </Box>
  );
};

export default EditableIcon;
