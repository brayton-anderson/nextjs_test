/** @type {import('next').NextConfig} */

module.exports = {
  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL,
  },
  images: {
    domains: [
      'api.lorem.space',
      's3.amazonaws.com'
    ],
  }
};
