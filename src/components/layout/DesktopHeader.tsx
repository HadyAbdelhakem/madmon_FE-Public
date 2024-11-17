import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import LanguageSwitcher from "../constant/LanguageSwitcher";
import { useTranslations } from "next-intl";
import Cookies from "js-cookie"; // Import js-cookie for client-side cookie handling
import { useRouter } from "next/navigation"; // For App Router navigation
import { deleteCookie } from "cookies-next"; // Import deleteCookie from cookies-next

export interface UserAvatarMenuProps {
  isUserMenuOpen: boolean;
  isLogged: boolean | null; // Make it compatible with nullable values if necessary
  handleUserMenuClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleUserMenuClose: () => void;
  handleLogout: () => void;
  userMenuAnchorEl: null | HTMLElement;
}


interface DesktopHeaderProps {
  logo: string | StaticImageData;
  favicon: string | StaticImageData;
  styles: Record<string, string>;
  UserAvatarMenu: React.FC<UserAvatarMenuProps>;
  handleUserMenuClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleUserMenuClose: () => void;
  userMenuAnchorEl: null | HTMLElement;
  isUserMenuOpen: boolean;
}

const DesktopHeader: React.FC<DesktopHeaderProps> = ({
  logo,
  favicon,
  styles,
  UserAvatarMenu,
  handleUserMenuClick,
  handleUserMenuClose,
  userMenuAnchorEl,
  isUserMenuOpen,
}) => {
  const t = useTranslations("DesktopHeader");
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true); // New state for loading
  const router = useRouter(); // Get the Next.js App Router instance

  // Effect to check for the token when the component mounts
  useEffect(() => {
    const token = Cookies.get("access_token"); // Check for token in cookies
    if (token) {
      setLogged(true); // Set logged to true if token exists
    } else {
      setLogged(false); // Set logged to false if no token
    }
    setLoading(false); // Set loading to false once the check is complete
  }, []); // Empty dependency array ensures this runs once on mount

  const handleLogoutClick = () => {
    // Remove the access token and user information from cookies
    deleteCookie("access_token");
    deleteCookie("user"); // Assuming 'user' is the cookie storing user information

    // Update logged state if you have a logged-in state in your app
    setLogged(false);

    // Redirect to the login page
    router.push(`/login`);
  };

  if (loading) {
    // Optionally, return a loading spinner or null while checking authentication
    return null;
  }

  return (
    <>
      <Box className={styles["logo-container"]}>
        <Image src={logo} alt="Logo" className={styles.logo} />
      </Box>
      <Box
        className={styles["nav-links"]}
        sx={{
          display: "flex",
          flexWrap: "wrap", // Allow items to wrap to the next line if needed
          gap: "20px", // Default gap between links
          width: "100%", // Full width by default
          justifyContent: { xs: "center", md: "space-between" }, // Center links on smaller screens, space out on medium+
          paddingX: { xs: "16px", sm: "24px", md: "32px" }, // Add horizontal padding on different screen sizes
          "@media (max-width: 600px)": {
            flexDirection: "column", // Stack links vertically on very small screens
            alignItems: "center", // Center items when stacked
            gap: "10px", // Reduce the gap between links for small screens
          },
          "@media (min-width: 601px) and (max-width: 1024px)": {
            flexDirection: "row", // Horizontal layout on tablets
            justifyContent: "space-evenly", // Even spacing on tablet-sized screens
            paddingX: "40px", // Add space between the edges of the box and the page on tablet view
          },
          "@media (min-width: 1025px)": {
            flexDirection: "row", // Horizontal layout on larger screens
            width: "auto", // Adjust width to fit content
          },
        }}
      >
        <Link className={styles.link} href="/">
          {t("home")}
        </Link>
        <Link className={styles.link} href="/search">
          {t("search")}
        </Link>
        <Link className={styles.link} href="/">
          {t("about")}
        </Link>
        <Link className={styles.link} href="/">
          {t("contact")}
        </Link>
        <Link className={styles.link} href="/">
          <Image src={favicon} alt="Favorite Icon" className={styles.icon} />
          {t("favorites")}
        </Link>
        <LanguageSwitcher />

        {/* Conditionally render the login link only if the user is NOT logged in */}
        {!logged && (
          <Link className={styles.link} href="/login">
            {t("login")}
          </Link>
        )}
      </Box>

      {/* User Avatar and Menu */}
      {logged && (
        <UserAvatarMenu
          isUserMenuOpen={isUserMenuOpen}
          handleUserMenuClick={handleUserMenuClick}
          handleUserMenuClose={handleUserMenuClose}
          handleLogout={handleLogoutClick}
          userMenuAnchorEl={userMenuAnchorEl}
          isLogged={logged}
        />
      )}
    </>
  );
};

export default DesktopHeader;
