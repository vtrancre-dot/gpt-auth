/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    rewrites: async () => {
        return [
          {
            source: '/api/:path*',
            destination:'https://gpt-auth-ch20.onrender.com/:path*',
          },
        ]
      },
}

module.exports = nextConfig
