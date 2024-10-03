/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "**",
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/overview",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;