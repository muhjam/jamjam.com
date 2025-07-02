import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'id'],
  
  // Used when no locale matches
  defaultLocale: 'en',
  
  // Locale prefixing behavior
  localePrefix: 'as-needed',
  
  // Pathnames to ignore for locale prefixing
  pathnames: {
    '/': '/',
    '/about': '/about',
    '/works': '/works',
    '/contact': '/contact'
  }
});

export const config = {
  // Match all request paths except those that start with:
  // - api (API routes)
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - favicon.ico (favicon file)
  matcher: [
    '/((?!_next|api|favicon.ico|.*\..*).*)',
  ],
};
