/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        // remotePatterns: [
        //     {
        //         protocol: 'https',
        //         hostname: 'images.prismic.io',
        //         port: '',
        //         pathname: 'image/upload/**',
        //     },
        // ],
    },
    origin: "export",
}

module.exports = nextConfig
