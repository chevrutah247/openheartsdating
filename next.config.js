/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  async redirects() {
    return [
      // Old PHP entry point → home
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },

      // Canonicalize: www → non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.openheartsdating.com',
          },
        ],
        destination: 'https://openheartsdating.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
