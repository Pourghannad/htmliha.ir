/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.bleepstatic.com",
      },
      {
        protocol: "https",
        hostname: "cdn.searchenginejournal.com",
      },
      {
        protocol: "https",
        hostname: "www.c-sharpcorner.com",
      },
      {
        protocol: "https",
        hostname: "hackaday.com",
      },
      {
        protocol: "https",
        hostname: "duck-lang.dev",
      },
      {
        protocol: "https",
        hostname: "hackread.com",
      },
{
        protocol: "https",
        hostname: "www.htmhell.dev",
      },{
        protocol: "https",
        hostname: "techcrunch.com",
      },{
        protocol: "https",
        hostname: "hackread.com",
      },{
        protocol: "https",
        hostname: "hackread.com",
      },


      
    ],
  },
};

module.exports = nextConfig;
