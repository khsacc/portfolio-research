const { i18n } = require("./next-i18next.config");
module.exports = {
  reactStrictMode: true,
  // i18n,
  i18n: {
    defaultLocale: "ja",
    locales: ["en", "ja"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.child_process = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.dns = false;
      config.resolve.fallback.tls = false;
    }
    return config;
  },
};
