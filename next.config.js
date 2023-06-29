/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fakestoreapi.com"],

    // <== Domain name
  },
  experimental: {
    allowFutureImage: true,
  },
};

module.exports = nextConfig;
