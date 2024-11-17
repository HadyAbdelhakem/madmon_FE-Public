"use client";
import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../../styles/pages/login.module.scss";
import logo from "../../../assets/images/full-logo.png";
import LoginForm from "@/components/forms/LoginForm";
import SignUpForm from "@/components/forms/SignUpForm";
import SocialLoginButtons from "@/components/ui/SocialLoginButtons";
import WhereGetOtpCodeModal from "@/components/ui/SmsOtpOption";
import TabSwitcher from "@/components/constant/CustomTabButton";
import BackButton from "@/components/constant/BackButton ";

type Direction = "login" | "signup"; // Adjust based on possible values


const Login = () => {
  const [activeForm, setActiveForm] = useState("login");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSwitch = (newForm: string) => {
    setActiveForm(newForm);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const formVariants = {
    hidden: (direction: Direction) => ({
      x: direction === "login" ? 50 : -50,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (direction: Direction) => ({
      x: direction === "login" ? -50 : 50,
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflowY: "auto", // Apply scrolling to the main container
      }}
      dir="ltr"
    >
      <Grid container sx={{ height: "100vh" }}>
        <Grid item xs={12} md={6} sx={{
            height: "100%", // Ensure full height for the left section
          }}>
          <Box className={styles.login}>
            <Image
              alt="Logo"
              src={logo}
              width={240}
              height={240}
              style={{ zIndex: 1 }}
            />
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <BackButton />

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <TabSwitcher
              activeForm={activeForm}
              handleTabClick={handleFormSwitch}
            />

            {/* Main content container */}
            <Box
              sx={{
                width: "100%",
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {activeForm === "login" ? (
                  <motion.div
                    key="login"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={formVariants}
                    style={{ width: "100%" }}
                  >
                    <LoginForm />
                  </motion.div>
                ) : (
                  <motion.div
                    key="signup"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={formVariants}
                    style={{ width: "100%" }}
                  >
                    <SignUpForm />
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>
          </Box>

          <WhereGetOtpCodeModal
            open={isModalOpen}
            handleClose={handleCloseModal}
          />

          {/* Move SocialLoginButtons to the bottom */}
          <Box
            sx={{
              width: "100%",
              marginTop: "auto",
          
            }}
          >
            <SocialLoginButtons />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
