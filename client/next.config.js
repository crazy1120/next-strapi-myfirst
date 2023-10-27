/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  env: {
    SERVER_ROOT_URL: "http://localhost:1337",
    SERVER_GRAPHQL_URL: "http://localhost:1337/graphql",
  },
  i18n,
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
