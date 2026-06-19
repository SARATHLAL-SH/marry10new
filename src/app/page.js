import HomeClient from './HomeClient';
import Image from "next/image"; // Next.js built-in

export const metadata = {
  title: "Matrimonial Sites in India | Trusted Matrimony – Marry10",
  description: "Marry10 is a trusted matrimonial site in India to find verified bride and groom profiles for marriage.",
  keywords: [
    "matrimonial sites in india",
    "best matrimony site",
    "online matrimony",
    "marriage matchmaking",
    "find life partner",
  ],
  authors: [{ name: "Marryat10" }],
  robots: "index, follow",

   icons: {
  icon: [
    { url: "/images/logo16.png", sizes: "16x16", type: "image/png" },
    { url: "/images/logo32.png", sizes: "32x32", type: "image/png" },
    { url: "/images/logo32.png", sizes: "192x192", type: "image/png" },
  ],
  apple: [
    { url: "/images/logo32.png", sizes: "180x180", type: "image/png" },
  ],
},

  openGraph: {
    title: "Matrimonial Sites in India | Marry10",
    description: "Find verified bride and groom profiles on Marry10, a trusted online matrimony platform.",
    siteName: "Marry10",
    images: [
      {
        url: "/images/marry10-01.png", // your existing image
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
    images: ["/images/marry10-01.png"], // same image works for Twitter
  },
};

export default function Home() {
  return (
    <main className=" flex-col items-center ">
      {/* Hero Section */}
      {/* <h1 className="text-3xl text-center font-bold mb-4">Find Your Perfect Life Partner</h1>

      <Image
        src="/images/heroImg.jpg"
        alt="Happy bride and groom looking for life partner"
        width={600}
        height={400}
        className="rounded-lg mb-6"
        priority
      />

      <h2 className="text-xl font-semibold mb-2">Browse Verified Profiles</h2>
      <p className="mb-4">
        Marry10 connects thousands of happy couples every year. Explore verified bride and groom profiles to find your ideal match.
      </p>

      <a
        href="/about"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Learn More About Us
      </a> */}

      {/* HomeClient Component */}
      <div className="mt-0">
        <HomeClient />
      </div>
    </main>
  );
}
