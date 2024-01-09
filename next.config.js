/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        // formats: ['image/avif', 'image/webp'],
        // remotePatterns: [
        //     {
        //         protocol: 'https',
        //         hostname: 'images.prismic.io',
        //         port: '',
        //         pathname: 'image/upload/**',
        //     },
        // ],
    },
    distDir: "dist",
    output: "export",
}

module.exports = nextConfig
