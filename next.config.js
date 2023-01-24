/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        formats: ['image/avif', "image/webp"],
        domains: ["firebasestorage.googleapis.com", "generate-labs-nextjs.vercel.app"],
        dangerouslyAllowSVG: true,
    },
}
