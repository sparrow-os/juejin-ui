/**
 * @type {import('next').NextConfig}
 */
module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["http://localhost:3000"],
    },
    webpack: (config, options) => {
        config.module.rules.push(
            {
                test: /\.md$/,
                use: 'raw-loader'
            },
            {
                test: /\.txt$/,
                use: 'raw-loader'
            }
        )
        return config
    },
    //js 等资源文件的前缀
    assetPrefix: process.env.NEXT_ASSET_PREFIX,
    basePath: "/home", 
    // 编译文件的输出目录
    distDir: "dist/pc",
    output: "export"
};



