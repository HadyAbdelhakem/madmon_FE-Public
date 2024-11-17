"use client";
import ComfortSection from "@/pages/sections/ComfortSection";
import ContactUs from "@/pages/sections/ContactUs";
import DescribeSection from "@/pages/sections/DescribeSection";
import HeroSection from "@/pages/sections/HeroSection";
import "./page.module.css"; 
import { Box } from "@mui/material";
import SearchSection from "@/pages/sections/SearchSection";
import CountDawnSection from "@/pages/sections/CountDawnSection";

export default function Home() {
  return (
    <div>
      <Box>
        <HeroSection />
        <CountDawnSection />
        <SearchSection />
        <ComfortSection />
        <DescribeSection />
        <ContactUs />
      </Box>
    </div>
  );
}
