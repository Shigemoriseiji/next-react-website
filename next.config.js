/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
        pathname: '/assets/ba2791efdf7f4479afd4ed09cb1f1898/**',
      },
    ],
  },
}

module.exports = {
  images: {
    domains: ['images.microcms-assets.io'],
  },
}
