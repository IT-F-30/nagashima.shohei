/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/nagashima.shohei', // Assuming it's deployed to username.github.io/nagashima.shohei/
};

module.exports = nextConfig;
