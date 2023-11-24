/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["http://localhost:3000"],
  },
  experimental: {
    appDir: true,
  },
  output: "export",
};
