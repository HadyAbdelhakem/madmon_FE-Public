// src/context/LanguageContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context
interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
}

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// LanguageProvider component to wrap around parts of the app that need access to the language context
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("en"); // Default to English

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the LanguageContext
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
