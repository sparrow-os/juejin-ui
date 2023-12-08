/**
 * @type {import('next').NextConfig}
 */
module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["http://localhost:3000"],
    },

    experimental: {
        appDir: true,
    },
    //js 等资源文件的前缀
    assetPrefix: process.env.NEXT_ASSET_PREFIX,
    // basePath: "/home", //node
    // 编译文件的输出目录
    distDir: "dist/pc",
    output: "export"
};
