/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true,
    domains: ['i.postimg.cc',"i.ibb.co","i.ytimg.com","filmdaily.co","occ-0-4773-2164.1.nflxso.net","occ-0-6215-2164.1.nflxso.net"],
  },
};

module.exports = nextConfig
