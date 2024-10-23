/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats:['image/webp'],
    domains: ['i.ibb.co'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/admin/overview",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
