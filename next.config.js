const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withContentlayer()({
  nextConfig,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
});
