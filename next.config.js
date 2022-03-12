/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://images.unsplash.com","https://getwallpapers.com","https://besthqwallpapers.com","https://upload.wikimedia.org"],
    loader: "custom",
    path: "/",
  },
}

module.exports = nextConfig
