"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  OutlinedInput,
  Typography,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import styles from "../../styles/components/forms/requestCallForm.module.scss";
import MainButton from "../constant/MainButton";
import FormBackButton from "../constant/FormBackButton";
import { useRequestCall } from "@/hooks/useRequestCall";
import Done from "../constant/Done";

interface RequestCallFormProps {
  unitId: string; // Define unitId prop
}

const RequestCallForm: React.FC<RequestCallFormProps> = ({ unitId }) => {
  const router = useRouter();
  const {
    mutate: submitRequestCall,
    status,
    isError,
    isSuccess,
  } = useRequestCall();

  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    message: "",
    user_id: "", // Set this value appropriately, e.g., from logged-in user
    unit_id: unitId, // Use the passed unitId
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    submitRequestCall(formData);
  };

  // Redirect back after 1.5 seconds upon success
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        router.back(); // Navigate to the previous page
      }, 1500);

      // Clear the timer if the component unmounts before the timer finishes
      return () => clearTimeout(timer);
    }
  }, [isSuccess, router]);

  return (
    <Box>
      {isSuccess ? (
        // Show the Done component at the top
        <Box mt={-20} display="flex" justifyContent="center">
          <Done />
        </Box>
      ) : (
        // Render the form if submission is not successful
        <Box>
          <Box className={styles.formContainer}>
            <Grid>
              <Typography className={styles.formHeader}>
                Fill In your Data and We’ll call you
              </Typography>
            </Grid>
            <Grid container className={styles.inputContainer} spacing={2}>
              <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                <Typography
                  gutterBottom
                  sx={{
                    fontSize: "18px",
                    fontWeight: 500,
                    marginBottom: 2,
                    marginTop: 2,
                  }}
                >
                  Name
                </Typography>
                <OutlinedInput
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Enter your name..."
                  fullWidth
                  sx={{
                    height: "52px",
                    width: "293px",
                    backgroundColor: "white",
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                <Typography
                  gutterBottom
                  sx={{
                    fontSize: "18px",
                    fontWeight: 500,
                    marginBottom: 2,
                    marginTop: 2,
                  }}
                >
                  Mobile Number
                </Typography>
                <OutlinedInput
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Enter your mobile number..."
                  fullWidth
                  sx={{
                    height: "52px",
                    width: "293px",
                    backgroundColor: "white",
                  }}
                />
              </Grid>
            </Grid>

            {/* Message Field */}
            <Grid
              container
              className={styles.inputContainer}
              sx={{ marginTop: 3 }}
            >
              <Grid size={{ xs: 12, md: 12, lg: 12 }}>
              <Typography
                  gutterBottom
                  sx={{
                    fontSize: "18px",
                    fontWeight: 500,
                    marginBottom: 2,
                  }}
                >
                  Message
                </Typography>
                <TextField
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.messageInput}
                  variant="outlined"
                  placeholder="Type Your Message..."
                  fullWidth
                  multiline
                  rows={4} // Set the height of the message input box
                  sx={{ width: "100%", backgroundColor: "white" }}
                />
              </Grid>
            </Grid>
          </Box>
          <Grid container className={styles.buttonContainer} spacing={2}>
            <Grid>
              <FormBackButton />
            </Grid>
            <Grid>
              <MainButton
                text={status === "pending" ? "Submitting..." : "Submit"}
                width="295px"
                height="42px"
                fontSize="16px"
                sx={{ borderRadius: "10px" }}
                onClick={handleSubmit}
              />
            </Grid>
          </Grid>

          {/* Display error feedback */}
          {isError && (
            <Typography color="red">
              There was an error submitting your request.
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default RequestCallForm;
