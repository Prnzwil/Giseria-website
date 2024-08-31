/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.(mp4|webm)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'video/mp4'
                    }
                }
            ]
        });

        return config;
    }
};