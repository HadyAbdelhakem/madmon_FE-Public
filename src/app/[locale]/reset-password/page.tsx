"use client";
import React from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../../styles/pages/login.module.scss";
import logo from "../../../assets/images/full-logo.png";
import SetPassword from "@/components/forms/SetPassword";

const ResetPassword = () => {

  // Animation for fading the forms in and out
  const formVariants = {
    hidden: { opacity: 0, transition: { duration: 0.5 } },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <Box sx={{ width: "100%", height: "auto", overflow: "hidden" }}>
      <Grid container>
        <Grid item xs={12} md={6} >
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
          
        
        >
            <AnimatePresence>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={formVariants}
            >
              <Box>
               <SetPassword/>
              </Box>
            </motion.div>
          </AnimatePresence>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResetPassword;
