/** @type {import('next').NextConfig} */

const rewrites = () => {
  return [
    {
      source: "/test_python_locally",
      destination: "http://localhost:8000",
    },
  ];
};

const nextConfig = {
  reactStrictMode: true,
  rewrites,
}

module.exports = nextConfig
