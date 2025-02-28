/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['react-particles', 'tsparticles', 'tsparticles-engine', 'tsparticles-slim'],
  experimental: {
    turbo: {
      resolveAlias: {
        'tsparticles-slim': 'tsparticles-slim/dist/esm/index.js',
      },
    },
  },
};

module.exports = nextConfig;
