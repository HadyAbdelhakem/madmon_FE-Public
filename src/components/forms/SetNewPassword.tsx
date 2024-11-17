import React, { useState } from "react";
import { Typography, Box, Container, OutlinedInput, Link } from "@mui/material";
import styles from "../../styles/components/forms/loginForm.module.scss";
import MainButton from "../constant/MainButton";
import PasswordInput from "../constant/PasswordInput";
import BackButton from "../constant/BackButton ";

const SetNewPassword = () => {
  // Define formData state with confirmPassword and other fields if needed
  const [formData, setFormData] = useState({
    confirmPassword: "",
  });

  // handleChange function to update formData
  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: event.target.value,
    }));
  };

  return (
    <Container>
      <Box sx={{ textAlign: "start", height: "100vh" }}>
        <BackButton />
        <Box
          sx={{
            my: 20,
            marginLeft: 15,
            fontSize: "26px",
            color: "black",
            fontWeight: 800,
            width: "445px",
          }}
        >
          <Typography
            variant="h5"
            component="h1"
            sx={{ fontSize: "26px", color: "black", fontWeight: 600 }}
            gutterBottom
          >
            Set a Password
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 2, fontSize: "16px", color: "#A2A7AF" }}
          >
            Your previous password has been reset. Please set a new password for your account.
          </Typography>
          <Typography className={styles.inputLabel}>Re-Enter Password</Typography>
          <PasswordInput
            value={formData.confirmPassword}
            onChange={handleChange("confirmPassword")}
            placeholder="Confirm password"
            sx={{ width: "100%" }} // Full width for responsiveness
          />
          <Typography
            gutterBottom
            sx={{
              fontSize: "18px",
            }}
          >
            Re-Enter password
          </Typography>
          <OutlinedInput
            className={styles.input}
            placeholder="Enter your Phone Number.."
            fullWidth
            sx={{ height: "52px", marginBottom: 5 }} // Set input height to 52px as requested
          />
          <Link href="/login">
            <MainButton
              text="Set Password"
              width="445px"
              height="42px"
              fontSize="16px"
            />
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default SetNewPassword;
