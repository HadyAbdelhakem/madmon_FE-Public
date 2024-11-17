import React from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  TextField,
} from "@mui/material";

import styles from  "../../styles/components/ui/deleteConfirmationModal.module.scss"
import ActionButton from "../constant/ActionButton";

interface DeleteConfirmationModalProps {
  open: boolean;
  handleClose: () => void;
  handleDelete: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  open,
  handleClose,
  handleDelete,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 4,
          padding: 3,
          textAlign: "center",
          backgroundColor: "#F2F3F4",
          width: "746px",
          height: "456px",
        },
      }}
    >
      <DialogTitle>
        <Typography className={styles.title}>
          Are You Sure You Want To Delete This Unit?
        </Typography>
        <Typography className={styles.subTitle}>
          You’ll Need An Approval From The Admin First
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box mt={2}>
          <Typography className={styles.inputTitle}>
            Reason
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Type Here..."
            multiline
            rows={4}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                fontSize:"12px"
              },
            }}
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", mt: 3 }}>
      <ActionButton
                customColor="#6666FF"
                fontSize="16px"
                width="191px"
                height="42px"
                label="Keep my Unit"
                sx={{ borderRadius: "10px", fontWeight: 600 }}
                onClick={handleClose} // Close modal when "Keep my Unit" is clicked

              />
              <ActionButton
                customColor="#F20000"
                fontSize="16px"
                width="191px"
                height="42px"
                label="Delete Unit"
                sx={{ borderRadius: "10px", fontWeight: 600 }}
                onClick={handleDelete} // Call delete handler when "Delete Unit" is clicked

              />
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationModal;
