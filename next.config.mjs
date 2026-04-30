/** @type {import('next').NextConfig} */
const nextConfig = {
  
  /* config options here */
  // https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
