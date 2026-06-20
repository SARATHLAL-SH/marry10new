import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Cormorant_Garamond, Sacramento, Inter } from 'next/font/google';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

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

export default function RootLayout({ children }) { // ✅ No type annotation here
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <GoogleAnalytics gaId="G-9NDJS0V9C9" />
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Matrimony</h3>
            <p className="text-gray-300">
              Find your perfect life partner with our modern matrimony platform.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-secondary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-300 hover:text-primary transition-colors">Privacy & Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/refund-policy" className="text-gray-300 hover:text-primary transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-secondary mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: www.marry10care@gmail.com</li>
              <li>Phone: +91 8891332500</li>
              <li>Address: Trivandrum, Kerala</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-300">
            &copy; {currentYear} Matrimony Website. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}