import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Serena Lam – Official Website',
  description: 'Welcome to the official website of Serena Lam. Discover her portfolio, latest updates, and more.',
  // You can add more fields supported by Next.js for better SEO:
  // See https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields for more details
  keywords: ['Serena Lam', 'Portfolio', 'Artist', 'Website'],
  openGraph: {
    title: 'Serena Lam – Official Website',
    description: 'Explore Serena Lam’s projects, biography, and latest news.',
    url: 'https://www.serenalam.com',
    siteName: 'Serena Lam Official',
    images: [
      {
        url: 'https://www.serenalam.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Serena Lam',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serena Lam – Official Website',
    description: 'Explore Serena Lam’s projects, biography, and latest news.',
    images: ['https://www.serenalam.com/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
