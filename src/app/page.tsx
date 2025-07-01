import { redirect } from 'next/navigation';

export default function Home() {
  // This will force a server-side redirect
  redirect('/en');
}

// This ensures the redirect happens on the server-side
export const dynamic = 'force-dynamic';

// Prevent static generation
// This is crucial to avoid build-time redirect issues
export const revalidate = 0;

export const fetchCache = 'force-no-store';
