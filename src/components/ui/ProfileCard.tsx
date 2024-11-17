"use client";
import { useCallback, useState } from "react";
import {
  Grid,
  Typography,
  Avatar,
  Box,
  CircularProgress,
  Paper,
} from "@mui/material";
import { useProfile } from "@/hooks/useProfile";
import styles from "../../styles/components/ui/profileCard.module.scss";
import EditableIcon from "../constant/EditableIcon";
import EditProfileCard from "./EditProfileCard";
import EmptyInput from "../constant/EmptyInput";
import editIcon from "../../assets/images/edit.png";
import { useTranslations, useLocale } from "next-intl"; // Import useLocale for language detection

const ProfileCard = () => {
  const t = useTranslations("ProfileCard");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const { data: profileData, isLoading, isError, error } = useProfile();
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleCancelClick = useCallback(() => {
    setIsEditing(false);
  }, []);

  if (isLoading) {
    return (
      <Box>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 320,
            backgroundColor: "#f0f2f5",
            borderRadius: "16px",
          }}
        >
          <CircularProgress />
        </Paper>
      </Box>
    );
  }

  if (isError) {
    return <Typography>{t("errorLoadingProfile")} {error?.message}</Typography>;
  }

  if (!profileData || !profileData.data) {
    return <Typography>{t("noProfileData")}</Typography>;
  }

  const user = profileData.data;
  const imgKey = "https://test.hoodies.fun";
  const userImage = imgKey + user.photo;

  if (isEditing) {
    return <EditProfileCard user={user} onCancelClick={handleCancelClick} />;
  }

  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        minHeight: { xs: 320, sm: 410 },
        backgroundColor: "#f0f2f5",
        borderRadius: "16px",
        padding: { xs: 2, sm: 4 },
        position: "relative",
      }}
    >
      <Grid
        container
        justifyContent="flex-end"
        sx={{
          position: "absolute",
          top: { xs: 10, sm: 20 },
          [isRTL ? "left" : "right"]: { xs: 10, sm: 20 },
        }}
      >
        <EditableIcon onClick={handleEditClick} />
      </Grid>

      <Grid container alignItems="center" justifyContent="flex-start" mt={2}>
        <Grid item xs={12} sm={4} md={1} display="flex" justifyContent={{ xs: "center", sm: "flex-start" }}>
          <Box position="relative" sx={{ display: "inline-block" }}>
            <Avatar
              alt={user.name || "User Avatar"}
              src={userImage}
              sx={{
                width: { xs: 60, sm: 85 },
                height: { xs: 60, sm: 85 },
                border: "5px solid #0512f5",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Typography
            component="div"
            sx={{
              fontWeight: 500,
              fontSize: { xs: "18px", sm: "20px" },
              color: "#494949",
              [isRTL ? "marginRight" : "marginLeft"]: { xs: 0, sm: 2 },
              textAlign: isRTL ? "right" : { xs: "center", sm: "left" },
              mt: { xs: 2, sm: 0 },
              [isRTL ? "paddingRight" : "paddingLeft"]: { xs: 0, sm: 2 },
            }}
          >
            {user.name || ""}
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ width: "100%", mt: 1, px: { xs: 2, sm: 0 } }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" className={styles.labelText}>
            {t("email")}
          </Typography>
          {user.email ? (
            <Typography variant="body2" className={styles.valueText}>
              {user.email}
            </Typography>
          ) : (
            <EmptyInput text={t("addYourEmail")} iconSrc={editIcon} onClick={handleEditClick} />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="body1" className={styles.labelText}>
            {t("address")}
          </Typography>
          {user.address ? (
            <Typography variant="body2" className={styles.valueText}>
              {user.address}
            </Typography>
          ) : (
            <EmptyInput text={t("addYourAddress")} iconSrc={editIcon} onClick={handleEditClick} />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="body1" className={styles.labelText}>
            {t("phoneNumber")}
          </Typography>
          <Typography variant="body2" className={styles.valueText}>
            {user.phone_number || ""}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="body1" className={styles.labelText}>
            {t("password")}
          </Typography>
          <Typography variant="body2" className={styles.valueText}>
            **********
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProfileCard;
