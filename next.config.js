const createNextPluginPreval = require('next-plugin-preval/config');
const withNextPluginPreval = createNextPluginPreval();

module.exports = withNextPluginPreval({
    reactStrictMode: true,
    images: {
        domains: ['game.gtimg.cn', 'images.contentstack.io'],
    },
    experimental: {
        images: {
            allowFutureImage: true,
            unoptimized: true
        }
    },
});

