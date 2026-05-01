/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
    remotePatterns: [
      // https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
        search: '',
      },
      //https://img.magnific.com/free-photo/operation-process-performance-development-icon_53876-16541.jpg
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
        search: '',
      }
      
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
