export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // ✅ Option 1: Add the real sitemap URL (now that your domain is live)
    sitemap: "https://www.marryat10.com/sitemap.xml",
    
    // ✅ Option 2: If you want to wait, completely remove the 'sitemap' key
    // (Don't set it to null)
  };
}