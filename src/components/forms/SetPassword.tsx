import React, { useState } from "react";
import { Typography, Box, Container, OutlinedInput } from "@mui/material";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import styles from "../../styles/components/forms/loginForm.module.scss";
import MainButton from "../constant/MainButton";
import { useFormData } from "@/context/FormDataContext"; // Import the form data context
import { useEditPassword } from "@/hooks/useEditPassword"; // Import the hook to change the password
import BackButton from "../constant/BackButton ";

const SetPassword = () => {
  const { formData } = useFormData(); // Access the phone number from form data context
  const editPasswordMutation = useEditPassword(); // Use the custom hook for password update
  const router = useRouter(); // Initialize router for navigation

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // Handle input change for passwords
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  // Handle form submission to change the password
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Submit the password change request
    editPasswordMutation.mutate({
      phone_number: formData.phone, // Get the phone number from form data context
      password: password,
      password_confirmation: confirmPassword,
    }, {
      onSuccess: () => {
        // Redirect to login on successful password change
        router.push("/login");
      },
      onError: (error) => {
        console.error("Error updating password:", error);
        // You can handle the error case here if needed
      }
    });
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
          
          <form onSubmit={handleSubmit}> {/* Form submission handler */}
            <Typography
              gutterBottom
              sx={{
                fontSize: "18px",
              }}
            >
              Create Password
            </Typography>
            <OutlinedInput
              className={styles.input}
              placeholder="Enter your new password"
              fullWidth
              type="password"
              value={password}
              onChange={handlePasswordChange} // Handle password input
              sx={{ height: "52px", marginBottom: 5 }} // Set input height to 52px
            />
            
            <Typography
              gutterBottom
              sx={{
                fontSize: "18px",
              }}
            >
              Re-Enter Password
            </Typography>
            <OutlinedInput
              className={styles.input}
              placeholder="Confirm your password"
              fullWidth
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange} // Handle confirm password input
              sx={{ height: "52px", marginBottom: 5 }} // Set input height to 52px
            />
            
            {/* Submit button */}
            <MainButton
              text="Set Password"
              width="445px"
              height="42px"
              fontSize="16px"
              type="submit" // Button triggers form submission
            />
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default SetPassword;
