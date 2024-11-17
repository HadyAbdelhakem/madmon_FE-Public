import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Usage: App router
import { Modal, Box, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "../../styles/components/ui/WhereGetOtpCode.module.scss";
import MessagingOptions from "../constant/MessagingOptions";
import MainButton from "../constant/MainButton";
import SmsIcon from "../../assets/images/messageIcon.svg";
import WhereGetOtpCodeModal from "./WhereGetOtpCode";
import { useFormData } from "@/context/FormDataContext";
import { useRegisterUser } from "@/hooks/useRegisterUser";

interface SmsOtpOptionModalProps {
  open: boolean;
  handleClose: () => void;
}

const SmsOtpOptionModal: React.FC<SmsOtpOptionModalProps> = ({
  open,
  handleClose,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const { formData, updateFormData } = useFormData(); // Access and update form data from context
  const register = useRegisterUser(); // Use the custom registration hook

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleDoneClick = () => {
    // Update verification_way to SMS before submitting the registration
    updateFormData({ verificationWay: 'SMS' });

    // Prepare data to match RegisterRequest interface
    const registrationData = {
      email: formData.email, // Make sure email is included in formData and handled appropriately
      name: formData.name,
      phone_number: formData.phone,
      password: formData.password,
      password_confirmation: formData.confirmPassword,
      verification_way: formData.verificationWay
    };
    // Call the registration function
    register.mutate(registrationData, {
      
      onSuccess: () => {
        router.push("/verify-code"); // Navigate after successful registration
      },
      onError: (error) => {
        // Optionally handle errors here
        console.error("Registration failed:", error);
      }
    });
  };
  const modalStyle = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1030,
    height: 555,
    bgcolor: "white",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",

    borderRadius: "16px",
  };
  const router = useRouter();



  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Grid
          container
          spacing={2}
          justifyContent="center" 
          alignItems="center" 
          direction="column" 
          textAlign="center"
          className={styles.container}
        >
          <Grid size={12}>
            <MessagingOptions
              label="WhatsApp" // Provide a valid label
              iconSrc={SmsIcon} // Provide a valid image source (icon)
              text="You’ll Get a Code on your Mobile Number"
            />{" "}
          </Grid>
          <Grid size={12}>
            <Link className={styles.link} onClick={handleOpenModal}>
              Revert to Whatsapp
            </Link>

            {/* SmsOtpOption modal */}
            <WhereGetOtpCodeModal
              open={openModal}
              handleClose={handleCloseModal}
            />
          </Grid>
          <Grid size={12} className={styles.buttonContainer}>
            <MainButton
              text="Next"
              width="401px"
              height="42px"
              fontSize="16px"
              onClick={handleDoneClick} 
            />
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default SmsOtpOptionModal;
