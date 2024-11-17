import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing'; // Your existing routing config

// List of public routes (these routes don't require authentication)
const publicRoutes = ['/', '/login', '/verify-code', '/forgot-password','/search'];

// Create the next-intl middleware for localization
const languageMiddleware = createMiddleware(routing);

export function middleware(req: NextRequest) {
  // Get the access token from cookies (stored in cookies client-side)
  const token = req.cookies.get('access_token')?.value;

  // Get the current route pathname
  const pathname = req.nextUrl.pathname;

  // Extract the locale from the pathname (default to 'en' if none is found)
  const localeMatch = pathname.match(/^\/(ar|en)/);
  const locale = localeMatch ? localeMatch[1] : 'en'; // Use 'en' as default if locale is not found

  // Extract the base route by removing the language prefix if it's there
  const basePathname = pathname.replace(/^\/(ar|en)/, '');

  // If the route is public (e.g., '/', '/login', '/en', '/ar'), allow access without authentication
  if (publicRoutes.includes(basePathname) || pathname === `/${locale}`) {
    return languageMiddleware(req);
  }

  // If the route is private and the user is not authenticated, redirect to login
  if (!token) {
    const loginUrl = new URL(`/${locale}/login`, req.nextUrl.origin); // Redirect to the login page of the current locale
    return NextResponse.redirect(loginUrl.toString());
  }

  // If authenticated, continue with the request and run the language middleware
  return languageMiddleware(req);
}

// Apply middleware to all routes
export const config = {
  matcher: [
    // Match all locale-prefixed routes
    '/(ar|en)/:path*',

    // Match all other routes except for the public ones (home, login, static assets)
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
};
