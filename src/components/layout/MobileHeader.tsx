import React from 'react';
import { Box, IconButton } from '@mui/material';
import Image from 'next/image';
import { StaticImageData } from 'next/image'; 

interface MobileHeaderProps {
  drawerIcon: string | StaticImageData; 
  handleDrawerToggle: () => void;
  logo: string | StaticImageData; 
  styles: Record<string, string>;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({
  drawerIcon,
  handleDrawerToggle,
  logo,
  styles,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        position: "relative",
      }}
    >
      <IconButton
        className={styles["menu-button"]}
        onClick={handleDrawerToggle}
        sx={{ position: "absolute" }}
      >
        <Image
          alt="Drawer Icon"
          src={drawerIcon} 
          height={20}
          width={20}
        />
      </IconButton>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Image src={logo} alt="Logo" className={styles.logo} />
      </Box>
    </Box>
  );
};

export default MobileHeader;
