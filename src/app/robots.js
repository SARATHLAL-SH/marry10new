export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: null, // we’ll add real sitemap URL after live domain
  };
}
