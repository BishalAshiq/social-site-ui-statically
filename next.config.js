/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  unoptimized: true,
  output: 'export',
  // images:{
  //   remotePatterns:[
  //     {
  //       protocol:"https",
  //       hostname:"quantumpossibilities.eu"
  //     }
  //   ]
  // }
};

module.exports = nextConfig;
