/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    pageExtensions: ['js', 'jsx'],
    env: {
        BACKEND_ENDPOINT: process.env.BACKEND_ENDPOINT,
        ACCESS_TOKEN_TIME: process.env.ACCESS_TOKEN_TIME,
        CHECK_ACCESS_TOKEN_TIME: process.env.CHECK_ACCESS_TOKEN_TIME,
        LOOP_CHECK_TOKEN_TIME: process.env.LOOP_CHECK_TOKEN_TIME,
      }
};

export default nextConfig;
