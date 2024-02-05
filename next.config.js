/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    CLOUD_NAME: "dua6sy5y5",
    UPLOAD_PRESET: "ml_default",
  },
};

module.exports = nextConfig;
