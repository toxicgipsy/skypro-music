/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  allowedDevOrigins: ['192.168.68.57'],

  async redirects() {
    return [
      {
        source: '/',
        destination: '/music/main',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
