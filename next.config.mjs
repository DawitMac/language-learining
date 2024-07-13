/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next';
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
     }
};

export default withPlaiceholder(nextConfig);

