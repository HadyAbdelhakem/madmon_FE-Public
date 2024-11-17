// SocialLoginButtons.js
import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "../../styles/components/ui/brokerInfoCard.module.scss";

const BrokerInfoCard = () => {
  const isApproved = true; // Set this flag to true to hide the status

  return (
    <Box className={styles.mainContainer}>
      <Typography className={styles.header}>Broker’s Info</Typography>
      <Box className={styles.cardContainer}>
        <Box>
          <Grid
            container
            className={styles.cardContainer}
            sx={{ height: isApproved ? "136px" : "89px" }}
          >
            {/* Avatar Section */}
            <Grid
              size={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{maxHeight:"89px"}}
            >
              <Avatar
                alt="Amira Ahmed"
                src="/path-to-avatar-image.jpg" // Replace with the actual path to the avatar
                sx={{ width: 42, height: 42 }}
              />
            </Grid>

            {/* First Row of Text Section */}

            <Grid size={10} display={"flex"} alignItems={"center"}>
              <Grid container>
                {/* Broker Name */}
                <Grid size={12}>
                  <Typography className={styles.brokerName}>
                    Amira Ahmed
                  </Typography>
                </Grid>

                {/* Broker Status - Conditionally hidden based on isApproved flag */}
                <Grid size={12}>
                  <Typography
                    className={styles.brokerStatus}
                    style={{ visibility: isApproved ? "hidden" : "visible" }} // Hide if isApproved is true
                  >
                    (Waiting for Broker Approval)
                  </Typography>
                </Grid>

                {isApproved && (
                  <Grid size={12}>
                    <Box mt={1}>
                      <Typography className={styles.noteDetails}>
                        <span className={styles.noteText}>
                          Note:
                        </span>
                        You Can change the broker “From The Application” after 48 Hours from asigning
                      </Typography>
                    </Box>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default BrokerInfoCard;
