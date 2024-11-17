import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Usage: App router
import { Modal, Box, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "../../styles/components/ui/WhereGetOtpCode.module.scss";
import MainButton from "../constant/MainButton";
import WhatsAppIcon from "../../assets/images/whatsIcon.svg";
import MessagingOptions from "../constant/MessagingOptions";
import SmsOtpOptionModal from "./SmsOtpOption";
import { useFormData } from "@/context/FormDataContext";
import { useRegisterUser } from "@/hooks/useRegisterUser";


interface WhereGetOtpCodeModalProps {
  open: boolean;
  handleClose: () => void;
}

const WhereGetOtpCodeModal: React.FC<WhereGetOtpCodeModalProps> = ({
  open,
  handleClose,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const { formData } = useFormData(); // Access form data from context
  const register = useRegisterUser(); // Use the custom registration hook


  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
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

  const handleDoneClick = () => {
    // Prepare data to match RegisterRequest interface
    const registrationData = {
      email:formData.email,
      name: formData.name,
      phone_number: formData.phone,
      password: formData.password,
      password_confirmation: formData.confirmPassword,
      verification_way: "WA", 
    };

    // Call the registration function
    register.mutate(registrationData, {
      onSuccess: () => {
        router.push("/verify-code"); // Navigate after successful registration
      }
    });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Grid
          container
          spacing={2}
          justifyContent="center" // Centers the content horizontally
          alignItems="center" // Centers the content vertically (if there's height)
          direction="column" // Stacks the items vertically
          textAlign="center"
          className={styles.container}
        >
          <Grid size={12}>
            <MessagingOptions
              label="WhatsApp" // Provide a valid label
              iconSrc={WhatsAppIcon} // Provide a valid image source (icon)
              text="You’ll Get a Code on your Whatsapp Number"
            />
          </Grid>
          <Grid size={12}>
            <Link className={styles.link} onClick={handleOpenModal}>
              Try Another Way
            </Link>

            {/* SmsOtpOption modal */}
            <SmsOtpOptionModal
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
              onClick={handleDoneClick} // Open modal when clicked
            />
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default WhereGetOtpCodeModal;
