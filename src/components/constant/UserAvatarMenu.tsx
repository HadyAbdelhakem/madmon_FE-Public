"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Skeleton,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";
import styles from "../../styles/components/layout/navbar.module.scss";
import userAvatar from "../../assets/images/avatar.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { useProfile } from "@/hooks/useProfile";
import { ProfileData } from "@/types/profile";
import { getCookie } from "cookies-next"; // Import getCookie
import { useLogout } from "@/hooks/useLogout"; // Import the logout hook
import { useRouter } from "next/navigation"; // Import Next.js router

export interface UserAvatarMenuProps {
  isUserMenuOpen: boolean;
  isLogged: boolean | null;
  handleUserMenuClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleUserMenuClose: () => void;
  userMenuAnchorEl: null | HTMLElement;
}

const UserAvatarMenu: React.FC<UserAvatarMenuProps> = ({
  isUserMenuOpen,
  handleUserMenuClick,
  handleUserMenuClose,
  userMenuAnchorEl,
}) => {
  const [menuClasses, setMenuClasses] = useState("menu-enter");
  const [userData, setUserData] = useState<ProfileData | null>(null);
  const { mutate: logout } = useLogout(); // Use logout hook
  const [isLogged, setIsLogged] = useState(false);

  const router = useRouter(); // Initialize the Next.js router

  // Fetch profile data using the useProfile hook
  const { data: profileData, isLoading, isError } = useProfile();

  // Reference for keeping the previous data
  const previousDataRef = useRef<ProfileData | null>(null);

  // Initial load: Get user data from cookies
  // Check user cookie on component mount
  useEffect(() => {
    const userCookie = getCookie("user");
    if (userCookie) {
      try {
        const parsedUser = JSON.parse(userCookie as string);
        setUserData(parsedUser);
        setIsLogged(true);
      } catch (error) {
        console.error("Failed to parse user cookie:", error);
        setIsLogged(false);
      }
    } else {
      setIsLogged(false);
    }
  }, []);

  // Update user data dynamically with the hook
  useEffect(() => {
    if (
      profileData?.data &&
      JSON.stringify(profileData.data) !== JSON.stringify(previousDataRef.current)
    ) {
      previousDataRef.current = profileData.data;
      setUserData(profileData.data); // Update userData state
    }
  }, [profileData]);

  const imgKey = "https://test.hoodies.fun";
  const userImage = userData?.photo ? `${imgKey}${userData.photo}` : null;

  const iconVariants = {
    open: {
      rotate: -180,
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
    closed: {
      rotate: 0,
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    if (Boolean(userMenuAnchorEl)) {
      const timer = setTimeout(() => {
        setMenuClasses("menu-enter menu-enter-active");
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [userMenuAnchorEl]);

  const handleLogout = () => {
    logout(); // Call logout without any arguments
    router.push("/login"); // Redirect to the login page after logout
  };
  

  if (!isLogged) {
    return null;
  }


  
  return (
    <Box className={styles["user-avatar"]}>
      {isLoading ? (
        <Box display="flex" alignItems="center">
          {/* Skeleton for Avatar */}
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            animation="wave"
            sx={{ marginRight: "10px" }}
          />
          {/* Skeleton for Name */}
          <Skeleton
            variant="text"
            width={100}
            height={20}
            animation="wave"
            sx={{ borderRadius: "4px" }}
          />
        </Box>
      ) : isError ? (
        <Typography>Error loading user data</Typography>
      ) : (
        <>
          <Avatar
            className={styles["MuiAvatar-root"]}
            sx={{ position: "relative", width: 40, height: 40 }}
          >
            {userImage ? (
              <Image
                src={userImage}
                alt={userData?.name || "User avatar"}
                fill
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            ) : userData?.name ? (
              <Typography>{userData.name.charAt(0)}</Typography>
            ) : (
              <Image
                src={userAvatar}
                alt="Default Avatar"
                fill
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            )}
          </Avatar>

          <Link href={"/profile/my-account"} className={styles.profileLink}>
            <Typography className={styles["user-name"]}>
              {userData?.name}
            </Typography>
          </Link>
          <motion.div
            animate={isUserMenuOpen ? "open" : "closed"}
            variants={iconVariants}
          >
            <IconButton onClick={handleUserMenuClick}>
              <KeyboardArrowDownIcon />
            </IconButton>
          </motion.div>

          <Menu
            anchorEl={userMenuAnchorEl}
            open={Boolean(userMenuAnchorEl)}
            onClose={handleUserMenuClose}
            classes={{ paper: menuClasses }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem
              onClick={handleLogout}
              sx={{
                fontSize: "14px",
                color: "#0512F5",
                width: "97px",
                height: "31px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
            </MenuItem>
          </Menu>
        </>
      )}
    </Box>
  );
};

export default UserAvatarMenu;
