/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    pageExtensions: ['js', 'jsx'],
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '/dpq4u31uc/**',
        },
      ],
    },
    env: {
        BACKEND_ENDPOINT: process.env.BACKEND_ENDPOINT,
        ACCESS_TOKEN_TIME: process.env.ACCESS_TOKEN_TIME,
        CHECK_ACCESS_TOKEN_TIME: process.env.CHECK_ACCESS_TOKEN_TIME,
        LOOP_CHECK_TOKEN_TIME: process.env.LOOP_CHECK_TOKEN_TIME,
        NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        API_KEY: process.env.API_KEY,
        API_SECRET: process.env.API_SECRET,
        API_ENVIRONMENT: process.env.API_ENVIRONMENT,
      }
};

export default nextConfig;
