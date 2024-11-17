// src/components/ClientThemeProvider.tsx
"use client";

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import "@fontsource-variable/noto-kufi-arabic"; // Import Noto Kufi Arabic
import { useLocale } from "next-intl"; // Import useLocale from next-intl

// Create the Poppins font style
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function ClientThemeProvider({
  children,
  direction,
}: {
  children: ReactNode;
  direction: "ltr" | "rtl"; // Define the direction prop type
}) {
  const locale = useLocale(); // Get the current locale

  // Choose the font based on the locale
  const fontFamily =
    locale === "ar"
      ? "'Noto Kufi Arabic Variable', Arial, sans-serif"
      : `${poppins.style.fontFamily}, Arial, sans-serif`;

  // Create the custom theme for MUI
  const theme = createTheme({
    direction, // Apply the direction to the MUI theme
    typography: {
      fontFamily, // Use the chosen font family
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: "8px",
            "& .MuiOutlinedInput-notchedOutline": {
              borderRadius: "8px",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#0512f5",
              borderWidth: "1px",
            },
            "& .MuiInputBase-input": {
              color: "#0512f5",
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#A2A7AF",
              opacity: 1,
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-notchedOutline": {
              borderRadius: "8px",
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            color: "#494949",
            fontWeight: 600,
            textTransform: "none",
            "&.Mui-selected": {
              color: "#000",
              textDecoration: "none",
            },
            "& .MuiTouchRipple-root": {
              display: "none",
            },
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            padding: "0 !important",
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            paddingLeft: "0 !important",
            paddingRight: "0 !important",
            paddingTop: "0 !important",
            paddingBottom: "0 !important",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
