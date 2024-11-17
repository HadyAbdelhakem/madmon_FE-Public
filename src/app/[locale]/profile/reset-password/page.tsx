"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import styles from "../../../../styles/pages/myAccount.module.scss";
import ActiveButton from "@/components/constant/ActiveButton";
import CancelButton from "@/components/constant/CancelButton";
import ProfileLayout from "@/components/layout/ProfileLayout";
import PasswordInput from "@/components/constant/PasswordInput";
import { useEditPassword } from "@/hooks/useEditPassword";
import { useFormData } from "@/context/FormDataContext"; // Import form data context
import { useRouter } from "next/navigation";

const RestPassword = () => {
  const [newPassword, setNewPassword] = useState(""); // State for new password
  const [retypePassword, setRetypePassword] = useState(""); // State for retyping password
  const router = useRouter(); // Initialize router for navigation

  const { mutate: editPassword } = useEditPassword(); // Use the edit password hook

  const { formData } = useFormData(); // Access phone number from form data context

  // Handler for saving the new password
  const handleSaveClick = () => {
    if (newPassword !== retypePassword) {
      alert("Passwords do not match!");
      return;
    }
    
    // Call the edit password mutation with the phone number and password data
    editPassword(
      {
        phone_number: formData.phone, // Include phone number from form data context
        password: newPassword,
        password_confirmation: retypePassword,
      },
      {
        onSuccess: () => {
          console.log("Password updated successfully");
          router.push("/profile/my-account"); // Redirect on success

          // Additional actions like navigation or feedback can be added here
        },
        onError: (error) => {
          console.error("Error updating password:", error);
          router.push("/profile/my-account"); // Redirect on success

        },
      }
    );
  };

  return (
    <ProfileLayout>
      <Grid container direction="column">
        <Grid item xs={12} sx={{ display: "block", width: "100%" }}>
          <Typography
            className={styles.header}
            sx={{
              fontSize: { xs: "18px", sm: "22px" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Set New Password
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={12} sx={{ display: "block", width: "100%" }}>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundColor: "#f0f2f5",
            borderRadius: "16px",
            padding: { xs: 2, sm: 4 },
            position: "relative",
            height: "191px",
            marginTop: 4,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ display: "flex", gap: 2, width: "100%" }}>
              <Box sx={{ flex: 1 }}>
                <Typography gutterBottom sx={{ fontSize: "18px" }}>
                  New Password
                </Typography>
                <PasswordInput
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                />
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography gutterBottom sx={{ fontSize: "18px" }}>
                  Retype Password
                </Typography>
                <PasswordInput
                  value={retypePassword}
                  onChange={(e) => setRetypePassword(e.target.value)}
                  placeholder="Retype new password"
                />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Box
        display="flex"
        justifyContent={{ xs: "center", sm: "flex-end" }}
        alignItems="center"
        width="100%"
        marginTop={3}
        sx={{ gap: "16px", flexDirection: { xs: "column", sm: "row" } }}
      >
        <CancelButton
          text="Cancel"
          width="190px"
          height="42px"
          fontSize="16px"
          // Add any cancel logic here if needed
        />
        <ActiveButton
          text="Save"
          width="190px"
          height="42px"
          fontSize="16px"
          onClick={handleSaveClick} // Attach the save handler here
        />
      </Box>
    </ProfileLayout>
  );
};

export default RestPassword;
