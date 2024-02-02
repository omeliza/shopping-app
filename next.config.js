/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                  cleanupIds: false,
                },
              },
            },
          ],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    })

    return config
  },
  images: { domains: ["cdn.dummyjson.com"] },
};

module.exports = nextConfig;
