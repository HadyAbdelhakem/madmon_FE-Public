"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

const FooterWrapper = () => {
  const pathname = usePathname() || ""; // Provide a default empty string if pathname is undefined
  const pathWithoutLocale = pathname.split("/")[2] || ""; // Extract the path after the locale

  // Define an array of routes where the footer should not be displayed
  const noFooterRoutes = [
    "login",
    "verify-code",
    "forgot-password",
    "reset-password",
    "set-new-password",
    "terms",
    "privacy",
  ];

  // Determine if the current page is one of the pages where the footer should not appear
  const shouldHideFooter = noFooterRoutes.includes(pathWithoutLocale);

  return (
    <>
      {!shouldHideFooter && <Footer />}
    </>
  );
};

export default FooterWrapper;
