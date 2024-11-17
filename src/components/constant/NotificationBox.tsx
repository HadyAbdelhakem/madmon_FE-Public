import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

// Define the interface for the props
interface NotificationBoxProps {
  title: string;
  time: string;
  description: string;
  isRead: boolean; // New prop to indicate if the notification is read
}

const NotificationBox: React.FC<NotificationBoxProps> = ({
  title,
  time,
  description,
  isRead,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 4, 69, 0.4)", // Custom background color with opacity
        borderRadius: 2, // Adjust for desired curvature
        padding: 2, // Increased padding for better layout
        color: "#FFFFFF", // White text color
        width: "505px", // Set a specific width
        height: "180px", // Auto height for flexible content
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Optional shadow
        marginTop: 10,
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        {/* First Row */}
        <Grid item xs={12}>
          <Grid container spacing={2} justifyContent="space-between">
            {/* Column 1 */}
            <Grid item xs={8}>
              <Grid container alignItems="center">
                <Grid item>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontSize: "16px", display: "inline" }}
                  >
                    {title}
                  </Typography>
                </Grid>
                {/* Read Tag */}
                {isRead && (
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontSize: "14px", color: "yellow", marginLeft: 1 }}
                    >
                      Read
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </Grid>

            {/* Column 2 */}
            <Grid item xs={4}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#F2DB00", fontSize: "16px" }}
                >
                  {time}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>

        {/* Second Row */}
        <Grid item xs={12}>
          <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
            {description}
          </Typography>
        </Grid>

        {/* Buttons Row */}
        <Grid item xs={12} sx={{ marginTop: 2 }}>
          <Grid container justifyContent="start" spacing={2}>
            <Grid item>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "rgba(2, 174, 54, 0.4)",
                  color: "white",
                  border: "1px solid #02AE36", // Adding the border with specified color
                  borderRadius:"10px",
                    width:"190px",
                  height:"37px"

                }}
              >
                Approve
              </Button>
            </Grid>
            <Grid item>
            <Button
                variant="contained"
                sx={{
                  backgroundColor: "rgba(242, 0, 0, 0.4)",
                  color: "white",
                  border: "1px solid #F20000", // Adding the border with specified color
                  borderRadius:"10px",
                  width:"190px",
                  height:"37px"
                }}

              >
               Decline
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NotificationBox;
