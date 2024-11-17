"use client";
import React, { useState, MouseEvent, useEffect } from "react";
import { AppBar, Toolbar, useMediaQuery, useTheme, Container } from "@mui/material";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";  // Import usePathname

import enLogo from "../../assets/images/Logo.png";
import arabicLogo from "../../assets/images/logo/arabic-logo.png";
import favicon from "../../assets/images/favorite.png";
import drawerIcon from "../../assets/images/drawer-icon.svg";
import styles from "../../styles/components/layout/navbar.module.scss";
import ContentLayout from "./ContentLayout";
import MobileNavbar from "./MobileNavbar";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import UserAvatarMenu from "../constant/UserAvatarMenu";

const Navbar: React.FC = () => {
  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [scrolled, setScrolled] = useState(false);

  const [logo, setLogo] = useState(enLogo); // Default to English logo
  const currentLanguage = useLocale();
  
  const pathname = usePathname();  // Use usePathname to get the current path

  useEffect(() => {
    // Log the current path
    console.log("Current path:", pathname);
  }, [pathname]); // Log the path whenever it changes

  useEffect(() => {
    // Check locale and set the corresponding logo
    if (currentLanguage === "en") {
      setLogo(enLogo); // English logo
    } else if (currentLanguage === "ar") {
      setLogo(arabicLogo); // Arabic logo
    }
  }, [currentLanguage]);

  const handleScroll = () => {
    const offset = window.pageYOffset;
    setScrolled(offset > 0); // Set scrolled to true if the user has scrolled
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleUserMenuClose = () => {
    setUserMenuAnchorEl(null);
    setIsUserMenuOpen(false);
  };
  const handleUserMenuClick = (event: MouseEvent<HTMLElement>) => {
    setUserMenuAnchorEl(event.currentTarget);
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Set background color based on pathname and scroll state
  const appBarBackgroundColor = scrolled ? "white" : (pathname === "/en" || pathname === "/ar" ? "transparent" : "white");

  // Apply the drop shadow only if the pathname is not '/' and if scrolled
// Apply the drop shadow if the background color should be white, which is when scrolled or when the pathname is not "/en" or "/ar"
const appBarBoxShadow = (scrolled || (pathname !== "/en" && pathname !== "/ar"))
  ? "0px 8px 14px rgba(0, 0, 0, 0.05)"
  : "none";

  return (
    <>
      {/* For Desktop View */}
      <Container>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            backgroundColor: appBarBackgroundColor,  // Apply the conditional background color
            transition: "background-color 0.3s ease",
            boxShadow: appBarBoxShadow,  // Conditional shadow
          }}
        >
          <ContentLayout>
            <Toolbar className={styles.toolbar}>
              {isMobile ? (
                <MobileHeader
                  drawerIcon={drawerIcon}
                  handleDrawerToggle={handleDrawerToggle}
                  logo={logo}
                  styles={styles}
                />
              ) : (
                <DesktopHeader
                  logo={logo}
                  favicon={favicon}
                  styles={styles}
                  UserAvatarMenu={UserAvatarMenu}
                  handleUserMenuClick={handleUserMenuClick}
                  handleUserMenuClose={handleUserMenuClose}
                  userMenuAnchorEl={userMenuAnchorEl}
                  isUserMenuOpen={isUserMenuOpen}
                />
              )}
            </Toolbar>
          </ContentLayout>
        </AppBar>
      </Container>

      {/* For mobile View  */}
      {isMobile && (
        <MobileNavbar
          isDrawerOpen={isDrawerOpen}
          handleDrawerToggle={handleDrawerToggle}
          profileMenuOpen={profileMenuOpen}
          toggleProfileMenu={toggleProfileMenu}
        />
      )}
    </>
  );
};

export default Navbar;
