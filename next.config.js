/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**/**",
      },
      {
        protocol: "https",
        hostname: "v5.airtableusercontent.com",
        port: "",
        pathname: "/**/**",
      },
      {
        protocol: "https",
        hostname: "euc.li",
        port: "",
        pathname: "/**/**",
      },
    ],
  },
};

module.exports = nextConfig;
