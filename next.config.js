/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: [],
  },
  // 临时注释i18n配置进行测试
  // i18n: require('./next-i18next.config.js'),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh']
  },
  webpack: (config, { isServer }) => {
    // 防止fs等模块在客户端报错
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
      };
    }
    return config;
  }
};

module.exports = nextConfig;