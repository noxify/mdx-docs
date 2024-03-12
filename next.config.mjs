import { createMdxtsPlugin } from 'mdxts/next';

const withMdxts = createMdxtsPlugin({
    theme: 'nord'
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withMdxts(nextConfig);
