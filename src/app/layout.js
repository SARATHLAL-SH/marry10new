import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import FacebookPixel from '@/components/FacebookPixel';
import { Cormorant_Garamond, Sacramento, Inter } from 'next/font/google';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; // ✅ Import Footer from a separate file

// Fonts
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
});

const sacramento = Sacramento({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-sacramento',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL("https://www.marryat10.com"),
  title: {
    default: "Trusted Matrimonial Sites in India | Marry10",
    template: "%s | Marry10",
  },
  description: "Marry10 is a trusted matrimonial site in India helping you find genuine and verified life partner matches.",
  keywords: "matrimony, matchmaking, life partner, brides, grooms, matrimonial service",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Trusted Matrimonial Sites in India | Marry10",
    description: "Find verified bride and groom profiles on Marry10, a trusted online matrimony platform.",
    siteName: "Marry10",
    url: "https://www.marryat10.com",
    images: [
      {
        url: "/images/marry10-01.png",
        width: 1200,
        height: 630,
        alt: "Marry10 Matrimonial Website",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matrimonial Sites in India | Marry10",
    description: "Find verified bride and groom profiles on Marry10 matrimonial platform.",
    images: ["/images/marry10-01.png"],
  },
  alternates: {
    canonical: "https://www.marryat10.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <GoogleAnalytics gaId="G-9NDJS0V9C9" />
        <FacebookPixel />
        <Footer />
      </body>
    </html>
  );
}