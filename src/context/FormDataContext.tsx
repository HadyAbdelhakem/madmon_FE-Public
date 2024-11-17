"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

// Extend the FormData interface with required properties
interface FormData {
  email: string | null;
  name: string;
  phone: string;
  password: string;
  confirmPassword: string;
  verificationWay: string;
  comeFrom: 0 | 1 | 2;
}

interface FormDataProviderProps {
  children: React.ReactNode; // Define children as React.ReactNode
}

// Create the context
export const FormDataContext = createContext<{
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  updateFormData: (newData: Partial<FormData>) => void;
} | null>(null);

export const FormDataProvider: React.FC<FormDataProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    email: null,
    name: "",
    phone: "",
    password: "",
    confirmPassword: "",
    verificationWay: "",
    comeFrom: 0,
  });

  const updateFormData = (newData: Partial<FormData>) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("formData");
      if (savedData) {
        setFormData(JSON.parse(savedData));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formData]);

  return (
    <FormDataContext.Provider value={{ formData, setFormData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

// Custom hook for accessing the context
export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error("useFormData must be used within a FormDataProvider");
  }
  return context;
};
