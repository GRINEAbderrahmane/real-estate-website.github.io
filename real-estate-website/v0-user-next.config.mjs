/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/real-estate-website' : '',
  // Replace 'real-estate-website' with your repository name
};

export default nextConfig;

