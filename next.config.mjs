/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [{
                protocol: 'https',
                hostname: 'cars-showcase-ftmk.vercel.app',
                port: '',
                pathname: '/**',
            }, {
                protocol: 'https',
                hostname: 'car-showcase-ftmk.vercel.app',
                port: '',
                pathname: '/cars/**'
            }


        ],
    },

};

export default nextConfig;