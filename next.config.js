/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

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
    basePath: isProd ? "/portfolio-next" : "",
    distDir: "dist",
    output: "export", // Uncomment before committing to avoid next build error // comment before deploying to vercel or 
    experimental: {
        serverComponentsExternalPackages: ["mongoose"]
    },
}

module.exports = nextConfig
