"use client"; // Mark this as a client component

import { usePathname } from 'next/navigation';
import Navbar from "./Navbar";

const NavbarWrapper = () => {
  const pathname = usePathname() || ''; // Provide a default empty string if pathname is undefined
  const pathWithoutLocale = pathname.split('/')[2] || ''; // Ensure this also defaults safely

  // Define an array of routes where the navbar should not be displayed
  const noNavbarRoutes = ['login', 'verify-code', 'forgot-password','reset-password','set-new-password','terms','privacy'];

  // Determine if the current page is one of the pages where the navbar should not appear
  const shouldHideNavbar = noNavbarRoutes.includes(pathWithoutLocale);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
    </>
  );
};

export default NavbarWrapper;
