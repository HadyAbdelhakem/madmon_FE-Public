import { Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl"; // Import useTranslations for translations

interface CustomTabButtonProps {
  label: string;
  isActive: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
interface TabSwitcherProps {
  activeForm: string; // Define the type of activeForm, assuming it’s a string here
  handleTabClick: (form: string) => void; // Define handleTabClick to accept a string argument
}

const CustomTabButton: React.FC<CustomTabButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <Box sx={{ position: "relative", width: "auto", padding: "6px 12px" }}>
      <Button
        onClick={onClick}
        disableRipple // Disables the ripple effect
        sx={{
          fontSize: "24px",
          color: isActive ? "#000000" : "#494949",
          backgroundColor: "transparent",
          minWidth: "auto",
          boxShadow: "none",
          textTransform: "none", // Removes uppercase transformation
          "&:hover": {
            backgroundColor: "transparent", // No background change on hover
          },
          "&:focus": {
            backgroundColor: "transparent", // No background change on focus
            outline: "none", // Removes outline on focus
          },
          "&:active": {
            boxShadow: "none", // No boxShadow on active
          },
        }}
      >
        {label}
      </Button>
    </Box>
  );
};

const TabSwitcher: React.FC<TabSwitcherProps> = ({ activeForm, handleTabClick }) => {
  const t = useTranslations("TabSwitcher"); // Initialize the translation function
  const locale = useLocale(); // Get the current locale
  const isEnglish = locale === "en"; // Check if the current language is English

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        width: "700px",
      }}
    >
      {/* Login Button - Now comes first */}
      <CustomTabButton
        label={t("login")} // Use the translation for "login"
        isActive={activeForm === "login"} // Use activeForm prop
        onClick={() => handleTabClick("login")} // Call handleTabClick prop with "login"
      />
      {/* Sign Up Button - Now comes second */}
      <CustomTabButton
        label={t("signup")} // Use the translation for "signup"
        isActive={activeForm === "signup"} // Use activeForm prop
        onClick={() => handleTabClick("signup")} // Call handleTabClick prop with "signup"
      />

      {/* Motion div for the animated line */}
      <motion.div
        initial={false}
        animate={{
          // Adjust the left value based on the language and active form
          left: !isEnglish
            ? activeForm === "signup"
              ? "435px"
              : "260px"
            : activeForm === "signup"
            ? "390px"
            : "270px", // Values for non-English languages
          width: "40px", // Width of the line
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: -10, // Position the line below the buttons
          height: "3px",
          backgroundColor: "#0512f5", // Line color
          borderRadius: "5px", // Add rounded corners
        }}
      />
    </Box>
  );
};

export default TabSwitcher;
