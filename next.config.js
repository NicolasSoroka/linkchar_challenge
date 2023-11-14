/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sd-2396737-h00023.ferozo.net',
      },
    ],
  },
}

module.exports = nextConfig
