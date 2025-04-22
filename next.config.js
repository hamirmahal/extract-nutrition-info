/**
 * Allow all `console` methods in development, but only `console.error` in production.
 */
const allowedConsoleMethods =
  process.env.NODE_ENV === "development"
    ? Object.getOwnPropertyNames(console).filter(
        (name) => typeof console[name] === "function",
      )
    : ["error"];

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: {
      exclude: allowedConsoleMethods,
    },
  },
};

module.exports = nextConfig;
