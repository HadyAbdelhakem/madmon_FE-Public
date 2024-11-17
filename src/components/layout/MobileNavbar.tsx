import React, { useEffect, useState } from "react";
import {
  Drawer,
  Box,
  IconButton,
  Avatar,
  Typography,
  Collapse,
  List,
  ListItemButton,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import logoutIcon from "../../assets/images/logout.png";
import { Login } from "@mui/icons-material"; // Import Login icon from Material UI

import Cookies from "js-cookie"; // Import js-cookie to handle cookies
import styles from "../../styles/components/layout/navbar.module.scss";
import LanguageSwitcher from "../constant/LanguageSwitcher";

interface MobileNavbarProps {
  isDrawerOpen: boolean;
  handleDrawerToggle: () => void;
  profileMenuOpen: boolean;
  toggleProfileMenu: () => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  isDrawerOpen,
  handleDrawerToggle,
  profileMenuOpen,
  toggleProfileMenu,
}) => {
  const [user, setUser] = useState<{
    name: string;
    photo: string | null;
  } | null>(null);
  const router = useRouter();

  // Retrieve user data from cookies on component mount
  useEffect(() => {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      const userData = JSON.parse(userCookie);
      setUser(userData);
    }
  }, []);
  const handleLogout = () => {
    // Remove the access token from the cookies
    Cookies.remove("access_token"); // Assuming your token is stored with this key

    // Optionally, remove other cookies related to the user session
    Cookies.remove("user");

    // Redirect to the home page or login page
    router.push("/login"); // Change to the correct page where the user should be redirected
  };
  

  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={handleDrawerToggle}
      variant="temporary"
      ModalProps={{
        keepMounted: true,
        style: { width: "100%" },
      }}
      sx={{
        "& .MuiDrawer-paper": { width: "100%" },
      }}
    >
      <Box className={styles.drawer}>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ position: "absolute", top: 8, left: 8 }}
        >
          <CloseIcon />
        </IconButton>

        {user && (
          <>
            {/* User Avatar and Name Box */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
                marginTop: 10,
                marginLeft: 1,
                marginRight: 1,
                backgroundColor: "#f7f7f7",
                padding: "12px 16px",
                borderRadius: "10px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
                transition: "background-color 0.2s ease-in-out",
              }}
              onClick={toggleProfileMenu}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  sx={{
                    width: 56,
                    height: 56,
                    marginRight: 2,
                  }}
                >
                  {user?.photo ? (
                    <Image
                      src={user.photo}
                      alt={user.name}
                      width={56}
                      height={56}
                    />
                  ) : (
                    user?.name?.charAt(0) || "U" // Show the first letter of the user's name or a default "U"
                  )}
                </Avatar>
                <Typography variant="subtitle1">
                  {user?.name || "User"}
                </Typography>
              </Box>
              <ExpandMoreIcon
                sx={{
                  transform: profileMenuOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.2s",
                }}
              />
            </Box>

            {/* Profile Menu Collapse */}
            <Collapse in={profileMenuOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ margin: 2 }}>
                <ListItemButton sx={{ pl: 4 }}>
                  <Typography variant="body2">Profile Settings</Typography>
                </ListItemButton>
                <Divider sx={{ margin: 2 }} />
                <ListItemButton sx={{ pl: 4 }}>
                  <Typography variant="body2">Account</Typography>
                </ListItemButton>
                <Divider sx={{ margin: 2 }} />
                <ListItemButton sx={{ pl: 4 }} onClick={handleLogout}>
                  <Typography variant="body2">Logout</Typography>
                </ListItemButton>
              </List>
            </Collapse>
          </>
        )}

        <Box className={styles["drawer-list"]}>
          <List>
            <ListItemButton
              className={styles["drawer-nav-link"]}
              onClick={handleDrawerToggle}
            >
              <Typography>Home</Typography>
            </ListItemButton>
            <ListItemButton
              className={styles["drawer-nav-link"]}
              onClick={handleDrawerToggle}
            >
              <Typography>About</Typography>
            </ListItemButton>
            <ListItemButton
              className={styles["drawer-nav-link"]}
              onClick={handleDrawerToggle}
            >
              <Typography>Contact Us</Typography>
            </ListItemButton>
            <ListItemButton
              className={styles["drawer-nav-link"]}
              onClick={handleDrawerToggle}
            >
              <Typography>Favorites</Typography>
            </ListItemButton>
          </List>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px 16px",
            marginTop: 4,
          }}
        >
          <Link
            className={styles["logout-link"]}
            href={user ? "#" : "/login"} // If user exists, handle logout; otherwise redirect to login
            onClick={user ? handleLogout : undefined} // Call handleLogout if user exists, otherwise no onClick event
          >
            {/* Conditionally render the custom logout icon or Material UI login icon */}
            {user ? (
              <Image
                src={logoutIcon}
                alt="Logout Icon"
                className={styles.icon}
              />
            ) : (
              <Login
                sx={{ color: "#0512f5", fontSize: 24 }} // Set the color and size of the login icon
                className={styles.icon}
              />
            )}
            <span
              style={{ color: user ? "#F20000" : "#0512f5", marginLeft: "8px" }} // Conditionally set the color based on user existence
            >
              {user ? "Logout" : "Login"}{" "}
              {/* Change text based on user existence */}
            </span>
          </Link>

          <LanguageSwitcher />
        </Box>
      </Box>
    </Drawer>
  );
};

export default MobileNavbar;
