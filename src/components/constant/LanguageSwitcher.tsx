'use client';

import { useState, useEffect } from 'react';
import { Menu, MenuItem } from '@mui/material';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import languageIcon from '../../assets/images/language.png';
import styles from '../../styles/components/layout/navbar.module.scss';
import Link from 'next/link';

const LanguageSwitcher = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const pathname = usePathname() ?? '/'; // Provide a default value if pathname is null
  const currentLocale = useLocale();

  // Handler to open the language menu
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  // Close the language menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Change the language and update the URL
const changeLanguage = (locale: string) => {
  if (locale === currentLocale) {
    handleClose();
    return; // Do nothing if the selected locale is the same as the current one
  }

  // Construct the new URL with the selected locale
  const segments = pathname.split('/');
  segments[1] = locale; // Replace the first segment with the new locale
  const newPath = segments.join('/');

  // Use router to navigate to the new locale
  router.push(newPath);

  // Force a page reload to update the locale
  window.location.reload();

  handleClose(); // Close the menu after selection
};


  // Update the HTML lang attribute and text direction
  useEffect(() => {
    document.documentElement.lang = currentLocale;
    document.documentElement.dir = currentLocale === 'ar' ? 'rtl' : 'ltr';
  }, [currentLocale]);

  return (
    <>
      <Link href="/" className={styles.link} onClick={handleClick}>
        <Image src={languageIcon} alt="Language Icon" className={styles.icon} />
        {currentLocale === 'en' ? 'EN' : 'العربية'}
      </Link>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
        <MenuItem onClick={() => changeLanguage('ar')}>العربية</MenuItem>
      </Menu>
    </>
  );
};

export default LanguageSwitcher;
