/** @type {import('next').NextConfig} */

const nextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/playlist",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
