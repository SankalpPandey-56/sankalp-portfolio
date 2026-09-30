/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin workspace root — a stray lockfile in ~ otherwise confuses tracing.
  outputFileTracingRoot: import.meta.dirname,
};

export default nextConfig;
