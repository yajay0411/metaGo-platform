/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/logger"],
  reactStrictMode: true,
};

module.exports = nextConfig;
