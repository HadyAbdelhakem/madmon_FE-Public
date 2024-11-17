import React from 'react';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import sortIcon from '../../assets/images/sort-icon.svg'; // Adjust the path to your icon
import styles from '../../styles/components/constant/sortButton.module.scss'; // Import your Sass module

const SortButton = () => {
  return (
    <Button className={styles.sortButton} variant="outlined"   >
      <Typography className={styles.buttonText}>
        Sort By
      </Typography>

      <Image
        src={sortIcon}
        alt="Sort Icon"
        width={28} 
        height={28} 
        className={styles.sortIcon}
      />
    </Button>
  );
};

export default SortButton;
