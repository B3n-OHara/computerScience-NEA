/** @type {import('next').NextConfig} */
const nextConfig = {}
const withImages = require('next-images')
module.exports = {
    eslint: {
        ignoreDuringBuilds: true
    },
    typescript: {
        ignoreBuildErrors: true,
    },
}, nextConfig, withImages();
