/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized : true,
    domains: ['i.postimg.cc',"i.ibb.co","i.ytimg.com","filmdaily.co","occ-0-4773-2164.1.nflxso.net","occ-0-6215-2164.1.nflxso.net","media.thekashmirmonitor.net","vijaysolution.com","occ-0-64-1348.1.nflxso.net","webseriestale.com","britasia.tv","www.iwmbuzz.com","www.famousbollywood.com","img1.hotstarext.com","images.ottplay.com","www.deccanherald.com","stat4.bollywoodhungama.in","imgnew.outlookindia.com","img.doodcdn.co","www.91-cdn.com","shoutingstars.com","occ-0-1433-1723.1.nflxso.net","ullu2-files.ullu.app"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  }
};

module.exports = nextConfig
