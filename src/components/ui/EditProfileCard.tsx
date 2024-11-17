import React, { useState, useEffect } from "react";
import { Typography, OutlinedInput, Modal, Box, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useSendOTPCode } from "@/hooks/useSendOTPCode";
import EditableAvatar from "../constant/EditableAvatar";
import VerifyCode from "./VerifyCode";
import EditableTextField from "../constant/EditableTextField";
import styles from "../../styles/components/ui/profileCard.module.scss";
import CancelButton from "../constant/CancelButton";
import ActiveButton from "../constant/ActiveButton";
import { useFormData } from "@/context/FormDataContext";
import { useTranslations } from "next-intl";
import { ProfileData } from "@/types/profile";
import { useEditProfile } from "@/hooks/useEditProfile"; // Import the mutation hook
import Done from "../constant/Done";

interface EditProfileCardProps {
  user: ProfileData; // Expect a user prop of type ProfileData
  onCancelClick: () => void;
}

const EditProfileCard: React.FC<EditProfileCardProps> = ({
  user,
  onCancelClick,
}) => {
  const t = useTranslations("EditProfileCard");
  const { updateFormData } = useFormData();
  const [modalOpen, setModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [doneModalOpen, setDoneModalOpen] = useState(false); // State for Done modal
  const [initialPhoneNumber, setInitialPhoneNumber] = useState("");
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [address, setAddress] = useState(user.address || "");
  const [phoneNumber, setPhoneNumber] = useState(user.phone_number || "");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSelectedImage] = useState<File | null>(null);

  const { mutate: editProfile } = useEditProfile(); // Use the mutation hook
  const { mutate: sendOTPCode } = useSendOTPCode();

  useEffect(() => {
    // Only update if the phone number changes
    if (user.phone_number !== initialPhoneNumber) {
      setInitialPhoneNumber(user.phone_number || "");
      updateFormData({ phone: user.phone_number || "", comeFrom: 2 });
    }
  }, [user.phone_number, initialPhoneNumber, updateFormData]);

  const handleImageChange = (file: File | null) => {
    setSelectedImage(file);
  };

  const handleSave = () => {
    const updatedProfile = {
      name,
      email,
      address,
      phone_number: phoneNumber,
    };

    editProfile(updatedProfile, {
      onSuccess: () => {
        console.log("Profile updated successfully");
        setDoneModalOpen(true); // Show the Done modal

        // Close the Done modal after 1.3 seconds and refresh the route
        setTimeout(() => {
          setDoneModalOpen(false);
          window.location.reload(); // Force a full page reload

        }, 1300);

      },
      onError: (error) => {
        console.error("Error updating profile:", error);
        alert(t("profileUpdateError")); // Optional: Display an error message
      },
    });
  };
  const handleVerifySuccess = () => {
    // Actions to take when verification is successful
    console.log("Verification successful");
  };

  const handleSendOTP = () => {
    sendOTPCode(
      { data: { phone_number: phoneNumber } },
      {
        onSuccess: () => {
          setOpen(true);
        },
        onError: (error) => {
          console.error("Failed to send OTP:", error);
        },
      }
    );
  };

  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Paper
          elevation={0}
          sx={{
            minHeight: { xs: 320, sm: 410 },
            backgroundColor: "#f0f2f5",
            borderRadius: "16px",
            padding: { xs: 2, sm: 4 },
            position: "relative",
          }}
        >
          <Grid container alignItems="center" spacing={4}>
            {/* first row */}
            <Grid size={{ xs: 12, sm: 12, md: 1.2, lg: 1.2 }}>
              <EditableAvatar
                photo={user?.photo}
                onImageChange={handleImageChange}
              />
            </Grid>
            <Grid
              size={{ xs: 12, sm: 12, md: 8, lg: 8 }}
              sx={{ ml: { lg: 2, xs: 0, sm: 0 } }}
            >
              <EditableTextField defaultValue={name} onChange={setName} />
            </Grid>

            {/* second row */}

            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Typography variant="body1" className={styles.labelText}>
                {t("email")}
              </Typography>
              <OutlinedInput
                value={email}
                placeholder={t("enterEmail")}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  height: "42px",
                  width: "295px",
                  backgroundColor: "white",
                  color: "#0512F5",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ccc",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#0512F5",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#0512F5",
                  },
                  "&::placeholder": {
                    color: "#0512F5",
                  },
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              {" "}
              <Typography variant="body1" className={styles.labelText}>
                {t("address")}
              </Typography>
              <OutlinedInput
                value={address}
                placeholder={t("enterAddress")}
                onChange={(e) => setAddress(e.target.value)}
                sx={{
                  height: "42px",
                  width: "295px",
                  backgroundColor: "white",
                  color: "#0512F5",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ccc",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#0512F5",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#0512F5",
                  },
                  "&::placeholder": {
                    color: "#0512F5",
                  },
                }}
              />
            </Grid>

            {/* third Row */}

            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Typography gutterBottom sx={{ fontSize: "16px" }}>
                {t("mobileNumber")}
              </Typography>
              <OutlinedInput
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                sx={{
                  height: "42px",
                  width: "295px",
                  backgroundColor: "white",
                  color: "#0512F5",
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#ccc" },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#0512F5",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#0512F5",
                  },
                  "&::placeholder": { color: "#0512F5" },
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Typography
                variant="body1"
                className={styles.linkText}
                onClick={handleSendOTP}
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                {t("changePassword")}
              </Typography>

              <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 800,
                    height: 555,
                    bgcolor: "white",
                    boxShadow: 24,
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "16px",
                    paddingTop: 5,
                  }}
                >
                  <VerifyCode
                    hasBackButton={false}
                    onVerifySuccess={() => {}}
                  />
                </Box>
              </Modal>
            </Grid>
          </Grid>
        </Paper>

        <Modal
          open={modalOpen}
          onClose={handleCloseModal}
          aria-labelledby="verify-modal-title"
          aria-describedby="verify-modal-description"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: 800,
              bgcolor: "white",
              height: 550,
              boxShadow: 24,
              p: 4,
              borderRadius: "8px",
            }}
          >
            <VerifyCode
              hasBackButton={false}
              onVerifySuccess={handleVerifySuccess}
            />
          </Box>
        </Modal>

        <Grid container display="flex" justifyContent="end" mt={3} spacing={2}>
          <Grid
            display="flex"
            justifyContent="end"
            size={{ xs: 6, sm: 12, md: 3, lg: "auto" }}
          >
            <CancelButton
              text={t("cancel")}
              width="190px"
              height="42px"
              fontSize="16px"
              onClick={onCancelClick}
            />
          </Grid>
          <Grid
            display="flex"
            justifyContent="end"
            size={{ xs: 6, sm: 12, md: 3, lg: "auto" }}
          >
            <ActiveButton
              text={t("save")}
              width="190px"
              height="42px"
              fontSize="16px"
              onClick={handleSave}
            />
          </Grid>
        </Grid>
      </Box>{" "}
      <Modal
        open={doneModalOpen}
        onClose={() => setDoneModalOpen(false)}
        aria-labelledby="done-modal-title"
        aria-describedby="done-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "white",
            borderRadius: "16px",
            p: 4,
            boxShadow: 24,
          }}
        >
          <Done />
        </Box>
      </Modal>
    </>
  );
};

export default EditProfileCard;
