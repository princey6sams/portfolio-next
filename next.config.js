/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    basePath: isProd ? "/portfolio-next" : "",
    distDir: "dist",
    //output: "export", // Uncomment before committing to avoid next build error // comment before deploying to vercel or 
    experimental: {
        serverComponentsExternalPackages: ["mongoose"]
    },
}

module.exports = nextConfig
