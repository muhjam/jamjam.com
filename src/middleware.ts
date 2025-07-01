import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_FILE = /^\.(.*)$/;
const defaultLocale = 'en';
const locales = ['en', 'id'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip middleware for:
  // 1. API routes
  // 2. Next.js internals
  // 3. Static files
  // 4. Files in the public folder
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('/_next') ||
    PUBLIC_FILE.test(pathname) ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Check if the default locale is in the pathname
  if (pathname.startsWith(`/${defaultLocale}/`) || pathname === `/${defaultLocale}`) {
    return NextResponse.redirect(
      new URL(pathname.replace(`/${defaultLocale}`, '/'), request.url)
    );
  }

  // Check if the path has a valid locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If no locale in path, redirect to include default locale
  if (!pathnameHasLocale) {
    const newPath = pathname === '/' ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Match all request paths except those that start with /_next, /api, /static, or end with a file extension
  matcher: [
    '/((?!_next|api|favicon.ico|.*\..*).*)',
  ],
};
