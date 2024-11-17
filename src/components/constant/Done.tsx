"use client";
import React from "react";
import { Box, Typography } from "@mui/material";

import Image from "next/image";
import { motion } from "framer-motion";
import cicleIcon from "../../assets/images/doneIcon.svg";
import checkIcon from "../../assets/images/doneIconCheck.svg";

const Done = ({
  title = "Request Sent Successfully", // Default title
  circleSize = 200,                   // Default circle icon size
  checkSize = 100                      // Default check icon size
}) => {
  return (

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
          textAlign="center"
        >
          <Box position="relative" display="inline-flex">
            {/* Circle Icon with rotation animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 100 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1 }}
            >
              <Image src={cicleIcon} alt="Circle Icon" width={circleSize} height={circleSize} />
            </motion.div>
            
            {/* Check Icon with delay to appear after the circle finishes rotating */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              style={{ position: "absolute", top: "25%", left: "25%" }}
            >
              <Image src={checkIcon} alt="Check Icon" width={checkSize} height={checkSize} />
            </motion.div>
          </Box>
          <Typography variant="h6" color="primary" mt={2}>
            {title}
          </Typography>
        </Box>
 
  );
};

export default Done;
